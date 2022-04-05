# nico_wait_update

[にものさん](https://twitter.com/2mon00)
の[nicoExpansion](https://addons.mozilla.org/ja/firefox/addon/nicoexpansion/versions/)
を自分向けに改変したものです。類似機能はありますが、重複しないようにしました。

Firefox Developer Edition での動作を想定しています。Firefox (Stable) の場合では動作しないと思われます。使用するには about:config にて `xpinstall.signatures.required` を `false` にしてください。この設定には危険が伴うので注意してください。設定後に `icons` `popup` `script` `manifest.json` をzipにまとめて about:addons にて読み込ませると使えるようになります。

### ニコニコ動画での機能

キーボードの k または q でレジューム再生時の「前回視聴した続きから再生します」という表示を消します。レジューム再生はプレミアム会員限定の機能なのでこの表示を知らない人は多いと思われます。たまに残っていて邪魔だったんですよね。

キーボードの p を押したとき、または f でフルスクリーンを解除したときに指定の位置にスクロールします。気持ちいい位置にやはり移動して欲しいものですね。

### ニコニコ生放送での機能

フルスクリーン、10秒戻し、再生、10秒送りのクリックをそれぞれキーボードの f, j, k, l に割り当てました。こちらにはスクロールの機能は入れていません。

存在する機能は以上です。
