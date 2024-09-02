# nico_wait_update

Firefox Developer Edition での動作を想定しています。Firefox (Stable) の場合では動作しないと思われます。使用するには about:config にて `xpinstall.signatures.required` を `false` にしてください。この設定には危険が伴うので注意してください。設定後に `icons` `popup` `script` `manifest.json` をzipにまとめて about:addons にてドラックアンドドロップで読み込ませると使えるようになります。

### ニコニコ動画での機能

- 読み込み時の影と読み込みアイコンの削除
- いいねボタンを押すとピンク色になる
- 動画画面をクリックしても再生/停止しないように
- 動画画面の端の丸まりを削除
- キーボードの p, k, space を押したときにスクロール

### ニコニコ生放送での機能

- フルスクリーン、10秒戻し、再生、10秒送りのクリックをそれぞれキーボードの f, j, k, l に割り当て

### その他

- visitedなリンクの色を分かりやすく
- 使用するfontをブラウザデフォルトのものに

存在する機能は以上です。
