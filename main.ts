/**
 * python -m serial.tools.list_ports
 * 
 * This will send all key strokes via serial port and radio to remote Micro:bit. 
 * 
 * putty
 */
/**
 * This is receiver, remote Micro:bit
 */
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(7)
basic.forever(function () {
    radio.sendString(serial.readString())
    basic.pause(200)
})
