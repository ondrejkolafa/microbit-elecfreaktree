let intenzita = 0
let hluk = 0
let strip = neopixel.create(DigitalPin.P2, 6, NeoPixelMode.RGB)
let range = strip.range(0, 6)
let hlasitostni_stupen = 20
let hue = 0
let saturation = 240
let luminosity = 3
let hue_modifikator = 30
basic.forever(function () {
    hluk = input.soundLevel()
    intenzita = (255 - hluk) * 1
    if (hluk > hlasitostni_stupen * 1) {
        strip.setPixelColor(0, neopixel.hsl(intenzita, saturation, luminosity))
        hue += hlasitostni_stupen
    }
    if (hluk > hlasitostni_stupen * 2.2) {
        intenzita += -1 * hue_modifikator
        strip.setPixelColor(1, neopixel.hsl(intenzita, saturation, luminosity))
        hue += hlasitostni_stupen
    }
    if (hluk > hlasitostni_stupen * 3.3) {
        intenzita += -1 * hue_modifikator
        strip.setPixelColor(2, neopixel.hsl(intenzita, saturation, luminosity))
        hue += hlasitostni_stupen
    }
    if (hluk > hlasitostni_stupen * 4.4) {
        intenzita += -1 * hue_modifikator
        strip.setPixelColor(3, neopixel.hsl(intenzita, saturation, luminosity))
        hue += hlasitostni_stupen
    }
    if (hluk > hlasitostni_stupen * 5.5) {
        intenzita += -1 * hue_modifikator
        strip.setPixelColor(4, neopixel.hsl(intenzita, saturation, luminosity))
        hue += hlasitostni_stupen
    }
    if (hluk > hlasitostni_stupen * 6.6) {
        intenzita += -1 * hue_modifikator
        strip.setPixelColor(5, neopixel.hsl(intenzita, saturation, luminosity))
    }
    if (hluk <= hlasitostni_stupen) {
        strip.clear()
    }
    strip.show()
})
