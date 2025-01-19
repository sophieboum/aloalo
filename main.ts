radio.onReceivedNumber(function () {
    if (nombreReçu < 10) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . # . .
            # # . # #
            . # . # .
            `)
        basic.pause(500)
        basic.showNumber(nombreReçu)
        basic.pause(500)
    }
    if (nombreReçu == 10) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(500)
        basic.showNumber(nombreReçu)
        basic.pause(500)
    }
    if (nombreReçu > 10) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(500)
        basic.showNumber(nombreReçu)
        basic.pause(500)
    }
})
let nombreReçu = 0
radio.setGroup(10)
