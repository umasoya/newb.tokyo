---
title: "Acer Chromebook 14を買った"
date: 2018-08-20T01:02:41+09:00
tags: ["Chromebook", "IT", "review"]
draft: false
---

Macbookが壊れて起動不可能になり、修理に７万かかると言われ安価なChromebook購入を決意しました。
正直なところ、金銭的な余裕が出るまでの繋ぎとして購入したのですが、  
かなり使い勝手が良かったので今後しばらくはこいつがメイン機になりそうです。  
以下レビューと設定の備忘録です。

## Spec

<table>
    <tr>
        <th>製品名</th>
        <td>Acer Chromebook 14</td>
    </tr>
    <tr>
        <th>CPU</th>
        <td>Celeron Quad-core N3160</td>
    </tr>
    <tr>
        <th>メモリ</th>
        <td>4GB</td>
    </tr>
    <tr>
        <th>ストレージ</th>
        <td>SSD 32GB</td>
    </tr>
    <tr>
        <th>バッテリー</th>
        <td>3950mA(最大12時間)</td>
    </tr>
</table>

持ち運びしないのであくまで予測だが、バッテリーは８時間くらいは確実に持ちそう。  
Certified Refurbishedという日本で言うクーリングオフで返品されたものをメーカーがチェックとクリーニングをした新古品を海外Amazonで購入。価格は$203.5 + shipping fee $36.1 で計$239.6。

## Config

### Google日本語入力

US配列なのであまり弄る必要もないがあえて書くなら`tab`と`左shift`の間が`検索キー`になっているので`ctrl`に置き換えたことくらい。  
設定も至って簡単で右下の設定にあるキーボード設定で割り当てたいキーを選ぶだけ。

### Crosh Window App

Chromebookはデフォルトでは`ctrl-alt-t`でChromeのタブ内にターミナルが起動するのだが、これだと`ctrl-w`を押したときにタブが閉じてしまう。

#### Keybind

`Crosh Window`上で言語切替をしようとすると、デフォルトでは`Ctrl-Space`が効かない。
なので`Secure Shell App`の設定画面でこのキーが入力されたらOSに処理を渡すよう明示的に設定してやる必要がある。

```json
{
    "Ctrl-Space":"PASS"
}
```

#### Double Byte Character

Chroomebookのターミナルは２byte文字の表示が崩れてしまう。  
2018年8月現在ではこの問題はどうしようもないので諦めるしかないようだ。

## まとめ

#### メリット

- コスパが良い
 - タブレットに似た使い勝手の良さがある
- 打鍵感
 - 価格の低さから心配していたがかなり気持ちいい
- LinuxベースのOS
 - developerモードで起動すればbashが使え、ディレクトリ構造も普通のLinuxと同じ

#### デメリット

- あまり複雑なことはできない
 - 画像編集などはできない
- bluetoothをoffにするとwifiの接続が切れる
 - このマシン特有の問題なのかchromeOS全体の問題なのかは不明
 - 一度この症状になると再起動しないとwifiに接続ができない

結論としてはブラウジングがメインの普段使い用としてなら現状間違いなくコスパ最強。  
開発機としては発展途上といったところ。
