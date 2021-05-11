input.onPinPressed(TouchPin.P0, function () {
    Calculate()
})
input.onButtonPressed(Button.A, function () {
    position += -1
    if (position < 0) {
        position = 24
    }
    blink()
})
function blink () {
    for (let index = 0; index < 4; index++) {
        led.toggle(position % 5, position / 5)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    led.toggle(position % 5, position / 5)
})
input.onButtonPressed(Button.B, function () {
    position += 1
    if (position > 24) {
        position = 0
    }
    blink()
})
function Calculate () {
    total = 0
    multiplier = 1
    for (let index = 0; index <= 24; index++) {
        position = 24 - index
        if (led.point(position % 5, position / 5)) {
            total += multiplier
        }
        multiplier += multiplier
    }
    basic.clearScreen()
    basic.showNumber(total)
    basic.pause(1000)
    start()
}
function start () {
    basic.clearScreen()
    position = 24
    total = 0
    multiplier = 1
    blink()
}
let multiplier = 0
let total = 0
let position = 0
start()
