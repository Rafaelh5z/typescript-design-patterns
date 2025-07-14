import { ShapeState } from './ShapeState'

export class CircleState extends ShapeState {

    drawShape(): void {
        console.log('Drawing Circle')
    }

    eraseShape(): void {
        console.log('Erasing Circle')
    }
}