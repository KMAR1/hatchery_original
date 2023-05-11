input.onButtonPressed(Button.A, function () {
    if (Room_temperature <= 41) {
        Room_temperature += 3
    }
})
let Room_temperature = 0
pins.digitalWritePin(DigitalPin.P1, 0)
Room_temperature = input.temperature()
basic.forever(function () {
    if (Room_temperature >= 35) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    while (Room_temperature > input.temperature()) {
        basic.pause(2000)
        Room_temperature += -1
    }
})
