#!/bin/bash
# Usage: ./scripts/generate-test-key.sh [tier]
# Tiers: free ($0.20), starter ($3.50), pro ($7.00)

set -euo pipefail

TIER="${1:-starter}"

# Load .env from project root
set -a; source "$(dirname "$0")/../.env"; set +a

# Tier → budget mapping (matches src/lib/constants.ts TIER_BUDGETS)
case "$TIER" in
  free)    BUDGET=0.20 ;;
  starter) BUDGET=3.50 ;;
  pro)     BUDGET=7.00 ;;
  *) echo "Unknown tier: $TIER (use: free, starter, pro)"; exit 1 ;;
esac

PROXY="${LITELLM_PROXY_URL:-https://ai.truerecall.app}"

curl -s -X POST "$PROXY/key/generate" \
  -H "Authorization: Bearer $LITELLM_MASTER_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"user_id\": \"test-$(date +%s)\",
    \"max_budget\": $BUDGET,
    \"budget_duration\": \"monthly\",
    \"metadata\": {\"tier\": \"$TIER\", \"email\": \"test@truerecall.app\"}
  }" | python3 -c "
import sys, json
data = json.load(sys.stdin)
print(f\"Key:  {data.get('key', 'ERROR')}\")
print(f\"Tier: $TIER (budget: \$$BUDGET)\")
"
