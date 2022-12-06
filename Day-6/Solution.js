function getRandomNumberOfTacos() {
    let tacoEmoji = "🌮";
    let tacoEmojiArray = new Array(Math.floor(Math.random() * 10) + 1);
    tacoEmojiArray.fill(tacoEmoji);
    return tacoEmojiArray // replace this empty tray array
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
