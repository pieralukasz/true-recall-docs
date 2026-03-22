-- Auth codes for plugin OAuth flow
-- One-time codes linking browser auth sessions to Obsidian plugin
CREATE TABLE public.auth_codes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code text NOT NULL UNIQUE,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    state text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    used_at timestamptz,
    expires_at timestamptz NOT NULL DEFAULT (now() + interval '5 minutes')
);

-- Fast lookup during code exchange (only unused codes)
CREATE INDEX idx_auth_codes_code ON public.auth_codes(code) WHERE used_at IS NULL;

-- Cleanup index for expired codes
CREATE INDEX idx_auth_codes_expires ON public.auth_codes(expires_at);

-- RLS: only service_role can access (no anon/authenticated policies = deny all)
ALTER TABLE public.auth_codes ENABLE ROW LEVEL SECURITY;
