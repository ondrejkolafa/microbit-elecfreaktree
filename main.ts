let intenzita = 0
let hluk = 0
let strip = neopixel.create(DigitalPin.P2, 6, NeoPixelMode.RGB)
let range = strip.range(0, 6)
strip.setBrightness(10)
strip.showRainbow(1, 360)
basic.forever(function () {
    hluk = input.soundLevel()
    intenzita = hluk * 3
    strip.rotate(1)
    strip.show()
    basic.pause(400 - intenzita)
})
