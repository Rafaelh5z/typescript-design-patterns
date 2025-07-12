import { Circle } from './Circle'

function circleClient() {

    const greenCircle = new Circle('Green')
    const blueCircle = new Circle('Blue')
    const redCircle = new Circle('Red')

    // Cloning the circles
    const greenClone = greenCircle.clone()
    const blueClone = blueCircle.clone()
    const redClone = redCircle.clone()


    greenCircle.print()
    blueCircle.print()
    redCircle.print()
    greenClone.print()
    blueClone.print()
    redClone.print()
}

circleClient()