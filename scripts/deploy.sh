#!/usr/bin/env bash

if [[ -n "$(git status -s)" ]]; then
  echo -e "\n==> Commit changes in 'main' branch before deploying"
else
  echo -e "\n==> Switch to 'deploy' branch"
  git checkout deploy

  echo -e "\n==> Prepare files"
  rsync -rPavh --delete --exclude .git --exclude tmp tmp/ ./
  rm -rf tmp/

  if [[ -z "$(git status -s)" ]]; then
    echo -e "\n==> Nothing to deploy"
  else
    echo -e "\n==> Commit changes"
    git status -s
    git add .
    git commit -m "Update 'deploy' branch"
    echo -e "\n==> Push changes to 'deploy' remote branch"
    git push

    pnpx wrangler pages deploy . --project-name 'namnme'
  fi

  echo -e "\n==> Switch to 'main' branch"
  git checkout main
fi
