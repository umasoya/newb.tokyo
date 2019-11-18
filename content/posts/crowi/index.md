---
title: "GCEにcrowiを立てる"
date: 2019-11-14T03:03:59Z
draft: true
---

GCEのalways free枠を使って自分用のwikiを作ったのでそのメモ。  

## Google Compute Engine(GCE)

[Google Compute Engine](https://cloud.google.com/compute/docs?hl=ja)  
Google Cloud Platform(GCP)が提供しているGoogle版のEC2。  
*f1-micro* でリージョンが *us-west1/us-central1/us-east1* なら無料で使える。[GCPの無料枠](https://cloud.google.com/free/docs/gcp-free-tier)

## プロジェクト作成

プロジェクト名を「Crowi」に、その他はそのまま。

## VMインスタンス作成

画面左のメニューから「Computer Engine」→「VM インスタンス」を選択。  
「インスタンスを作成」をクリック。  
名前を「crowi」に変更。リージョンはus-west1(オレゴン)を選択。マシンタイプに「micro(共有 vCPU x 1)」を選択。  
ブートディスクの「変更」をクリック。OSは何でもいいので「CentOS8」を選択。サイズは30GBまで無料で使えるのでMAXの30GBに設定。  
「HTTPトラフィックを許可する/HTTPSトラフィックを許可する」を有効にして「作成」をクリック。

### 外部IPアドレス予約

画面左のメニューから「VPCネットワーク」→「外部IPアドレス」を選択。
「静的アドレスを予約をクリック」。  
名前を「crowi」にしてリージョンをインスタンスと同じ「us-west1(オレゴン)」に変更。接続先は先程作成したインスタンスに変更しておく。  
接続先が「なし」のままだと課金されるらしいので注意。  
「予約」をクリック。

### google-cloud-sdk をインストール

[公式の手順](https://cloud.google.com/sdk/downloads)に従ってインストール。  
そこそこのサイズがあるのか15分ほどかかった。  

インストールが終了したら `gcloud init` でSDKの初期設定を行う。

### SSH鍵の登録

gcloudコマンドは長いので普通にsshコマンドで接続できるようにSSH鍵を登録しておく。  
画面左のメニューから「Computer Engine」→「メタデータ」を選択。  
「SSH認証鍵」をクリックして「編集」をクリック。  
「項目を追加」で `ssh-keygen` で作成した公開鍵を入力して「保存」をクリック。  

次に `~/.ssh/config` に設定を追記して `ssh gcp` で接続できるようにする。  
IPアドレスは「Computer Engine」→「VMインスタンス」で表示されている「外部IP」を入力する。

```config
Host gcp
  HostName [IPアドレス]
  IdentityFile path/to/identity-file
```

## crowiのインストール

### yum update

`sudo yum -y update`

### node.js

`sudo yum install -y nodejs`

### docker

手順は[この記事](https://qiita.com/dora_2562/items/24691d3bec4c99c1d794)を参考にさせてもらった。  
書いてあるとおりに実行していけば問題なくインストールできる。

docker-compose は `pip` でインストール。  
