music.playMelody("B C5 A B G A F G ", 120)
forever(function () {
    pins.A0.servoWrite(90)
    pins.D1.digitalWrite(true)
    control.waitMicros(4)
    pins.D1.digitalWrite(false)
})
