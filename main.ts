input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        led.unplot(x, y)
        y += -1
        basic.pause(200)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        led.unplot(x, y)
        x += 1
        basic.pause(200)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    while (input.isGesture(Gesture.LogoUp)) {
        led.unplot(x, y)
        y += 1
        basic.pause(200)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        led.unplot(x, y)
        x += -1
        basic.pause(200)
    }
})
let x = 0
let y = 0
y = 2
x = 2
let y_2 = randint(0, 4)
let x_2 = randint(0, 4)
let zichtbaar = "ja"
basic.forever(function () {
    if (x == 5) {
        x += -1
    } else if (y == 5) {
        y += -1
    } else if (x == -1) {
        x += 1
    } else if (y == -1) {
        y += 1
    } else if (x_2 == 0) {
        x_2 += -1
    } else if (y_2 == 0) {
        y_2 += -1
    } else if (x_2 == -1) {
        x_2 += 1
    } else if (y_2 == -1) {
        y_2 += 1
    }
})
basic.forever(function () {
    music.playMelody("G C5 F B G C5 F B ", 120)
    music.playMelody("B E B E - - B E ", 400)
    music.playMelody("B E - - B E B E ", 400)
})
basic.forever(function () {
    led.plotBrightness(x, y, 255)
    if (x == x_2 && y == y_2) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.pause(50)
        basic.clearScreen()
        y_2 = randint(0, 4)
        x_2 = randint(0, 4)
    }
})
loops.everyInterval(200, function () {
    if (zichtbaar == "ja") {
        led.plotBrightness(x_2, y_2, 255)
        zichtbaar = "nee"
    } else {
        led.unplot(x_2, y_2)
        zichtbaar = "ja"
    }
})
