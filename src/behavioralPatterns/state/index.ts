import { CircleState } from './CircleState'
import { RectangleState } from './RectangleState'
import { Shape } from './Shape'

function stateClient() {
    
    const circle = new Shape(new CircleState())
    circle.draw()
    circle.erase()

    const rectangle = new Shape(new RectangleState())
    rectangle.draw()
    rectangle.erase()

}

stateClient()