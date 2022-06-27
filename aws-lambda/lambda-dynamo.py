# AWSをPythonで利用するためのSDK boto3をインポートする
import boto3

from boto3.dynamodb.conditions import Key, Attr

# Functionの実行ログを出力
print('Loading function')

# DynamoDBと接続
dynamodb = boto3.resource('dynamodb')

# テーブル内のIDを指定してデータを該当するitemを取得する
def lambda_handler(event, context):
    table_name = "DynamoForLambda"
    dynamotable = dynamodb.Table(table_name)
    # 複数IDをJSON配列から取り出しDynamoDBで検索しreturnする
    items = []
    for id in event["id"]:
        partition_key = {"id": id}
        res = dynamotable.get_item(Key=partition_key)
        items.append(res["Item"])
    return items

