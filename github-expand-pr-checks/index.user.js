// ==UserScript==
// @name github-expand-pr-checks
// @description Small UserScript that removes the maximum height of GitHubs pull request checks box.
// @version 0.0.1
// @match https://github.com/*
// ==/UserScript==
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .branch-action-item.open > .merge-status-list, 
    .branch-action-item.open > .merge-status-list-wrapper > .merge-status-list {
      max-height: none !important;
    }
  </style>
`);
