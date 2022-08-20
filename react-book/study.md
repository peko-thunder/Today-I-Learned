# インストール

## Typescript(global)
```
npm install -g typescript ts-node typesync
```

## React
```
npx create-react-app ./{projectName} --template typescript
```

## ESLint
```
npx eslint --init
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JavaScript
```

## Auto lint
```
npm install -D simple-git-hooks lint-staged
npx simple-git-hooks
```

## VS Code Plugins
下記を追加する

* ESLint
  * https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Prettier - Code formatter
  * https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* Stylelint
  * https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## VS Code setting.json
下記を追加する

* ESLint
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"editor.formatOnSave": false,
"eslint.packageManager": "npm",
"typescript.enablePromptUseWorkspaceTsdk": true,
```

* Prettier
```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[graphql]": {
    "editor.formatOnSave": true
},
"[javascript]": {
    "editor.formatOnSave": true
},
"[javascriptreact]": {
    "editor.formatOnSave": true
},
"[json]": {
    "editor.formatOnSave": true
},
"[typescript]": {
    "editor.formatOnSave": true
},
"[typescriptreact]": {
    "editor.formatOnSave": true
}
```

* Stylelint
```
"css.validate": false,
"less.validate": false,
"scss.validate": false,
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
},
```


# tsconfig.json

## React デフォルト設定から追加
```
{
  "baseUrl": "src",
  "downlevelIteration": true
}
```
※ tscongis.json 変更後はプロジェクトをリロードする必要がある
```
touch tsconfig.json
```

* baseURL
  * インポートのパス指定の絶対パスとなるディレクトリを指定。相対パスでimportをしなくてよくなる。

* downlevelIteration
  * compileOption.target = ES5 以前の場合でもES2015移行の記述を実行できるようにする。

# package.json

## 実行パスを記載する場合
WindowsとMACでパスの記述方法が異なるので注意
下記例では src/**/*.{js,jsx,ts,tsx} をパス指定している

* Windows 「\"」もしくは「¥"」で囲む
```
"scripts": {
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
  "lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx}\""
}
```

* MAC 「'」で囲む
```
"scripts": {
  "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
  "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
}
```

## Auto lint
```
"scripts" {
  "prepare": "simple-git-hooks > /dev/null"
},
"simple-git-hooks": {
  "pre-commit": "npx lint-staged"
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "prettier --write --loglevel=error",
    "eslint --fix --quiet"
  ],
  "src/**/*.{css,less,sass,scss}": [
    "stylelint --fix --quiet"
  ],
  "{public,src}/**/*.{html,gql,graphql,json}": [
    "prettier --write --loglevel=error"
  ]
}
```



# JSX

## children プロパティ
React18からは明示的にFunctionComponentに含める必要があるため、参考にするソースコードのchildrenには注意
下記の型を設定する
* ReactNode => 汎用
* ReactElement => エレメント
* sring => テキスト
またchildrenの要素が複数ある場合は配列として設定する
```
{
  children: [ReactElement, ReactElement];
}
```
