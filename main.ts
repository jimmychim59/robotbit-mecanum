radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "STOP") {
        sFlag = -1 * sFlag
        rgb.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (sFlag == 1) {
        if (name == "turn") {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            value,
            robotbit.Motors.M1B,
            value
            )
            robotbit.MotorRunDual(
            robotbit.Motors.M2A,
            value,
            robotbit.Motors.M2B,
            value
            )
        } else if (name == "w1") {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            value,
            robotbit.Motors.M2A,
            -1 * value
            )
        } else if (name == "w2") {
            robotbit.MotorRunDual(
            robotbit.Motors.M1B,
            -1 * value,
            robotbit.Motors.M2B,
            value
            )
        }
    } else {
        robotbit.MotorStopAll()
        rgb.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let rgb: neopixel.Strip = null
let sFlag = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
sFlag = -1
rgb = robotbit.rgb()
rgb.setBrightness(15)
rgb.showColor(neopixel.colors(NeoPixelColors.Red))
