# DB

## RDS
* ストレージは手動スケーリング
* リードレプリカ
* 自動バックアップ
* データベースのスナップショット
* マルチ AZ 配置
    * プライマリデータベースから、同期レプリケートされたセカンダリデータベースに自動的にフェイルオーバー

## Aurora
* MySQL の最大 5 倍のスループットと PostgreSQL の最大 3 倍のスループット
* サーバーレス設定
* ストレージの Auto Scaling
* マルチ AZ 配置と Aurora レプリカ
    * レプリカをフェイルオーバーして昇格

## DynamoDB
* スケールに応じたパフォーマンス
* Key-value およびドキュメントデータモデル
* DynamoDB Accelerator (DAX) は、インメモリキャッシュを使用できるようにして、読み取りパフォーマンスを大幅に向上させるが結果整合性
* サーバーレス
* Auto Scaling

## Redshift
* データウェアハウス
* 列指向ストレージ
* Redshift Serverless



# Backup

## EFS
ハンズオンとしてEFSを作成した際に下記がAWS Backupに作成されている。
* aws/efs/automatic-backup-plan
* aws/efs/automatic-backup-vault

ハンズオンの終了と共に不要な設定類は削除しているが権限エラーで削除できないようである。  
※ IAM AdministratorAccess を付与済み
```
「アクセスが拒否されました: このアクションを実行するには権限が不十分です。必要な権限については、アカウント管理者に相談してください。」
```
調べた範囲では、デフォルトで作成されたバックアップ設定は削除できないとのこと。バックアップの内容自体は権限変更で削除可能なようだ。  
https://aws.amazon.com/jp/premiumsupport/knowledge-center/efs-disable-automatic-backups/  
EFS自体を削除後に自動バックアップが動作していないか確認したが問題なし。

# ACM静的Webサイト

## ACM
* CloudFrontに利用するため、ACMの発行は東京リージョンではなくバージニア北部で作業する必要がある
* Route53に登録したドメインを連携可能

## CloudFront
* OAIを使用  
    バケットポリシーを設定
* オリジンシールドを有効  
    東京リージョン
* ビューワープロトコルポリシー  
    Redirect HTTP to HTTPS
* 料金クラス  
    北米、欧州、アジア、中東、アフリカを使用
* 代替ドメイン名 (CNAME) - オプション  
    ACMに設定したドメイン
* カスタム SSL 証明書 - オプション  
    ACM取得
* デフォルトルートオブジェクト - オプション  
    index.html
* 地理的制限  
    日本のみ

# Create

* Cloudformationでリソースの管理
* S3 + CloudFront + Lambda でのサーバーレス
* Congnitoでのログイン機能
* CloudFrontの署名付きCookieを利用してユーザーページへ遷移
* CloudFrontのビューワーリクエスト関数などを設定
