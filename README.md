# release-test
Just a repository to test different kinds of release scripts before using them on real projects


### How to solve

#### Command failed: git push --follow-tags
```
Command failed: git push --follow-tags
...

To git@github.com:zinserjan/wdio-screenshot.git
   a3b0490..1495b2e  master -> master
 * [new tag]         v0.2.3 -> v0.2.3
 ! [rejected]        ios -> ios (non-fast-forward)
 ! [rejected]        latest-firefox -> latest-firefox (non-fast-forward)
error: failed to push some refs to 'git@github.com:zinserjan/wdio-screenshot.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. If you did not intend to push that branch, you may want to
hint: specify branches to push or set the 'push.default' configuration variable
hint: to 'simple', 'current' or 'upstream' to push only the current branch.

```

Stop git from pushing all branches and just push the current branch to it's upstream branch via

```bash
$ git config --global push.default upstream
```
