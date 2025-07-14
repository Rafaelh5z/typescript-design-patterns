import { ShapeState } from './ShapeState'

export class RectangleState extends ShapeState {

    drawShape(): void {
        console.log('Drawing Rectangle')
    }

    eraseShape(): void {
        console.log('Erasing Rectangle')
    }

}