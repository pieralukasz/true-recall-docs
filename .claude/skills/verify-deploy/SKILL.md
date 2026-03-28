---
name: verify-deploy
description: Verify that documentation changes are committed, pushed, and deployed to production. Use when the user says "verify deploy", "check deploy", "is it live", or "production status". Catches the common "forgot to push" issue.
user-invocable: true
---

# Verify Documentation Deployment

Check that local changes have reached production. This skill addresses the recurring issue of changes being local-only.

## Step 1: Check Local State

```bash
git status
```

If there are uncommitted changes, warn the user and list the modified files.

## Step 2: Check for Unpushed Commits

```bash
git log origin/main..HEAD --oneline
```

If there are unpushed commits:
- List them
- Ask the user if they want to push now
- If yes: `git push origin main`

## Step 3: Verify Build Passes

```bash
npm run build
```

If the build fails, stop and fix the issue before deploying.

## Step 4: Check Deployment Status

The site deploys via GitHub Pages (push to main triggers `.github/workflows/deploy.yml`).

Check the latest workflow run:
```bash
gh run list --workflow=deploy.yml --limit=3
```

If the latest run failed, check the logs:
```bash
gh run view <run-id> --log-failed
```

## Step 5: Verify Production

Fetch the production site and check key pages:

```bash
curl -sS -o /dev/null -w "%{http_code}" https://truerecall.app/
curl -sS -o /dev/null -w "%{http_code}" https://truerecall.app/getting-started/introduction/
```

Expected: `200` for each.

## Summary

Report to the user:
1. Local state: clean / uncommitted changes / unpushed commits
2. Build: passes / fails
3. Deployment: latest run status (success/failure/in-progress)
4. Production: pages responding / errors

If everything is green, confirm "Production is up to date."
If there are issues, list specific actions needed.
