import { ShapeState } from './ShapeState'

export class Shape {
    state : ShapeState

    constructor(state : ShapeState) {
        this.state = state
    }
    
    draw() : void {
        this.state.drawShape()
    }

    erase() : void {
        this.state.eraseShape()
    }
}