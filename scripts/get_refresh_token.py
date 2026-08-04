#!/usr/bin/env python3
"""Generate a Google Ads API refresh token via OAuth installed-app flow.
Prints the auth URL explicitly so it can be opened in any browser.
"""
import json
from pathlib import Path
from google_auth_oauthlib.flow import InstalledAppFlow

CREDS_PATH = Path.home() / ".config/google-ads/credentials.json"

SCOPES = ["https://www.googleapis.com/auth/adwords"]

def main():
    creds_data = json.loads(CREDS_PATH.read_text())
    client_config = {
        "installed": {
            "client_id": creds_data["oauth_client_id"],
            "client_secret": creds_data["oauth_client_secret"],
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": ["http://localhost"],
        }
    }
    flow = InstalledAppFlow.from_client_config(client_config, scopes=SCOPES)
    creds = flow.run_local_server(
        port=8080,
        prompt="consent",
        access_type="offline",
        open_browser=False,
    )

    print("\n=== SUCCESS ===")
    print("Refresh token:", creds.refresh_token)

    creds_data["refresh_token"] = creds.refresh_token
    CREDS_PATH.write_text(json.dumps(creds_data, indent=2) + "\n")
    print(f"Saved to {CREDS_PATH}")

if __name__ == "__main__":
    main()
