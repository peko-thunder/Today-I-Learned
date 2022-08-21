# MEMO

## simple-git-hooks Monorepo構成
gitコマンドはリポジトリのルートで実行されるが、simple-git-hooks 自体は下層のディレクトリでインストールしていると、コマンド自体が実行できない  
そのためスクリプトを用いてsimple-git-hooksに対応した下層ディレクトリで実行させる必要がある

* lint-staged-around
  * https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/blob/master/lint-staged-around
* test-around
  * https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/blob/master/test-around

package.json
※ ここでの ./ はリポジトリルートを示す
```
"simple-git-hooks": {
  "pre-commit": "./lint-staged-around",
  "pre-push": "./test-around"
}
```
