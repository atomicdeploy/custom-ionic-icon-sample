#!/bin/bash
# Script to sync shared icons to Vue and Angular apps

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Syncing shared icons to Vue and Angular apps..."

# Sync to Vue app
echo "  -> Copying icons to vue-app/public/assets/icons/"
mkdir -p vue-app/public/assets/icons
cp -r shared/assets/icons/* vue-app/public/assets/icons/

# Angular app uses symlink (works better with Angular build)
echo "  -> Creating symlink for angular-app/src/assets/icons/"
mkdir -p angular-app/src/assets
rm -rf angular-app/src/assets/icons
ln -sf ../../../shared/assets/icons angular-app/src/assets/icons

echo "✓ Icons synced successfully!"
