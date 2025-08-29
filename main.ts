let photocelda = 0
basic.forever(function () {
    photocelda = pins.digitalReadPin(DigitalPin.P0)
    if (photocelda == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
