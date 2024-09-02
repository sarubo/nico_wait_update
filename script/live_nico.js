console.log = () => { }

const nicoNama = () => {
  console.log("nicoNama 1");
  const keys = ["k", "j", "l", "f"];
  console.log("nicoNama 2");
  const buttons = {};
  console.log("nicoNama 3");
  keys.forEach((key) => {
    buttons[key] = () => console.log("nicoNama key default");
    console.log("nicoNama 4");
  });
  console.log("nicoNama 5");
  const allButtons = document.getElementsByTagName("button");
  for (const element of allButtons) {
    const className = element.className;
    console.log(className);
    if (className.startsWith("___play-button") && element.parentElement.className.startsWith("___control-area")) {
      buttons.k = () => {
        element.click();
        console.log("k");
      }
    } else if (className.startsWith("___fullscreen-button")) {
      buttons.f = () => {
        element.click();
        console.log("f");
      }
    } else if (className.startsWith("___back-button")) {
      buttons.j = () => {
        element.click();
        console.log("j");
      }
    } else if (className.startsWith("___forward-button")) {
      buttons.l = () => {
        element.click();
        console.log("l");
      }
    }
    console.log("nicoNama 6");
  }
  console.log("nicoNama 7");
  document.addEventListener("keyup", (keyBoardEvent) => {
    for (const element of document.getElementsByTagName("div")) {
      if (element.className.startsWith("___disabled-message")) {
        const keyName = keyBoardEvent.key;
        console.log(keyName, buttons);
        buttons[keyName]();
        break;
      }
    }
  });
  console.log("nicoNama 8");
}

console.log("addEventListener start");
nicoNama();
console.log("addEventListener end");
