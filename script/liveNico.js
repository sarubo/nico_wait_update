console.log = () => {}

const nicoNama = () => {
    console.log("nicoNama 1");
    const keys = ['k', 'j', 'l', 'f'];
    console.log("nicoNama 2");
    let buttons = {};
    console.log("nicoNama 3");
    keys.forEach((key) => {
        buttons[key] = () => { console.log("nicoNama key default") };
        console.log("nicoNama 4");
    });
    console.log("nicoNama 5");
    const allButtons = document.getElementsByTagName("button");
    for (let i = 0; i < allButtons.length; i++) {
        const element = allButtons.item(i);
        const className = element.className;
        console.log(className);
        if (className.startsWith("___play-button___3Tq5i")) {
            buttons.k = () => {
                element.click();
                console.log("OK");
            } // 再生
        } else if (className.startsWith("___fullscreen-button")) {
            buttons.f = () => {
                element.click();
                console.log("OK");
            }; // fullscreen
        } else if (className.startsWith("___back-button")) {
            buttons.j = () => {
                element.click();
                console.log("OK");
            }; // 数秒前に戻る
        } else if (className.startsWith("___forward-button")) {
            buttons.l = () => {
                element.click();
                console.log("OK");
            }; // 数秒次に進む
        }
        console.log("nicoNama 6");
    };
    console.log("nicoNama 7");
    document.addEventListener('keyup', (keyBoardEvent) => {
        const keyName = keyBoardEvent.key;
        switch (keyName) {
            case 'k':
            case 'j':
            case 'l':
            case 'f':
                console.log(keyName, buttons);
                buttons[keyName]();
                break;
            default:
                break;
        }
    });
    console.log("nicoNama 8");
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("addEventListener start");
    nicoNama();
    console.log("addEventListener end");
})
