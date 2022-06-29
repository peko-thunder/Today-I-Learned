# AWS Backup

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

# Create

* Cloudformationでリソースの管理
* S3 + CloudFront + Lambda でのサーバーレス
* Congnitoでのログイン機能
* CloudFrontの署名付きCookieを利用してユーザーページへ遷移

