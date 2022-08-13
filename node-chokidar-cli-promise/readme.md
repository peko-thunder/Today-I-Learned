# Node環境監視ツール
※ 利用できない場合はindex.htmlで都度リロードして確認

1. 監視ツールのインストール
https://github.com/open-cli-tools/chokidar-cli
```
npm i chokidar-cli -g
```
2. 実行
```
chokidar "./test.js" -c "node test.js"
```

# Promise.allSettled() 検証
```
// 並列処理しvalueにはPromiseがreturnされる
const obj = {
  "サービスA" : asyncFunction(),
  "サービスB" : asyncFunction(),
  "サービスC" : asyncFunction(),
  "サービスD" : asyncFunction(),
};

// 全ての並列処理を待つ
Promise.allSettled(Object.values(obj))
.then(() => {
  ...
  console.log(`${key}は成功しました。中身は${value}です。`);
  if(error) throw "error!";
})
.catch(() => {
  ...
  console.log(`${key}は失敗しました。中身は${value}です。`);
})
;
```

# await Array.forEach() の関係性
今回のようにkey: value 型で並列処理した場合にObject.keys()などでvalueを取得処理する場合に、
想定した非同期処理が動作しない仕様であることが判明した。
対策として for ... in や Promise.all() が挙げられる。
ただPromise.all() の場合だとvalueを取得できてもkeyと紐づかないため、for ... in を採用
