# DynamoDB 設定

## テーブル名
DynamoForLambda

## パーティションキー
id as int

## 属性
name as string

# API GateWay 設定

## メソッドの作成
GET

## 統合リクエスト
マッピングテンプレート → application/json
```
{
  "id" : $input.params('id')
}
```
下記クエリ文字列に設定したパラメーターを取得するテンプレート

## テスト
クエリ文字列
```
id=[1001,1002]
```

## アクセス
https://xxx-api.ap-northeast-1.amazonaws.com/default/MyFirstLambda?id=[1001,1002]

