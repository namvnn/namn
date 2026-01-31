#!/usr/bin/env bash

if [[ -n "$(git status -s)" ]]; then
  echo -e "\n==> Commit changes in 'main' branch before deploying"
else
  echo -e "\n==> Switch to 'release' branch"
  git checkout release

  echo -e "\n==> Prepare files"
  rsync -rPavh --delete --exclude .git --exclude tmp tmp/ ./
  rm -rf tmp/

  if [[ -z "$(git status -s)" ]]; then
    echo -e "\n==> Nothing to deploy"
  else
    git status -s
    echo -e "\n==> Commit changes"
    git add .
    git commit -m "Update 'release' branch"
    echo -e "\n==> Push changes to 'release' remote branch"
    git push

    pnpx wrangler pages deploy . --project-name 'namnme'
  fi

  echo -e "\n==> Switch to 'main' branch"
  git checkout main
fi
