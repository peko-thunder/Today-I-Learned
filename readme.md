# MEMO

## simple-git-hooks Monorepo構成
1リポジトリに複数のPJ課題があり、その中で個別にsimple-git-hooks を利用する場合は特殊な設定とバッシュファイルが必要
* lint-staged-around
  * https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/blob/master/lint-staged-around
* test-around
  * https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/blob/master/test-around

package.json
```
"simple-git-hooks": {
  "pre-commit": ". ./lint-staged-around",
  "pre-push": ". ./test-around"
}
```

