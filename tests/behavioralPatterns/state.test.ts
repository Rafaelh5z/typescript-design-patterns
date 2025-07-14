import { Shape } from '../../src/behavioralPatterns/state/Shape'
import { ShapeState } from '../../src/behavioralPatterns/state/ShapeState'
import { CircleState } from '../../src/behavioralPatterns/state/CircleState'
import { RectangleState } from '../../src/behavioralPatterns/state/RectangleState'

describe('State Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('State (ShapeState)', () => {
        test('should create circle state', () => {
            const circleState = new CircleState()
            
            expect(circleState).toBeInstanceOf(CircleState)
            expect(circleState).toBeInstanceOf(ShapeState)
        })

        test('should create rectangle state', () => {
            const rectangleState = new RectangleState()
            
            expect(rectangleState).toBeInstanceOf(RectangleState)
            expect(rectangleState).toBeInstanceOf(ShapeState)
        })

        test('should draw circle', () => {
            const circleState = new CircleState()
            
            circleState.drawShape()
            
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Circle')
        })

        test('should erase circle', () => {
            const circleState = new CircleState()
            
            circleState.eraseShape()
            
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Circle')
        })

        test('should draw rectangle', () => {
            const rectangleState = new RectangleState()
            
            rectangleState.drawShape()
            
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Rectangle')
        })

        test('should erase rectangle', () => {
            const rectangleState = new RectangleState()
            
            rectangleState.eraseShape()
            
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Rectangle')
        })
    })

    describe('Context (Shape)', () => {
        test('should create shape with circle state', () => {
            const circleState = new CircleState()
            const shape = new Shape(circleState)
            
            expect(shape).toBeInstanceOf(Shape)
            expect(shape.state).toBe(circleState)
        })

        test('should create shape with rectangle state', () => {
            const rectangleState = new RectangleState()
            const shape = new Shape(rectangleState)
            
            expect(shape).toBeInstanceOf(Shape)
            expect(shape.state).toBe(rectangleState)
        })

        test('should draw shape with circle state', () => {
            const circleState = new CircleState()
            const shape = new Shape(circleState)
            
            shape.draw()
            
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Circle')
        })

        test('should erase shape with circle state', () => {
            const circleState = new CircleState()
            const shape = new Shape(circleState)
            
            shape.erase()
            
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Circle')
        })

        test('should draw shape with rectangle state', () => {
            const rectangleState = new RectangleState()
            const shape = new Shape(rectangleState)
            
            shape.draw()
            
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Rectangle')
        })

        test('should erase shape with rectangle state', () => {
            const rectangleState = new RectangleState()
            const shape = new Shape(rectangleState)
            
            shape.erase()
            
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Rectangle')
        })
    })

    describe('State Transitions', () => {
        test('should change state from circle to rectangle', () => {
            const circleState = new CircleState()
            const rectangleState = new RectangleState()
            const shape = new Shape(circleState)
            
            // Initial state behavior
            shape.draw()
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Circle')
            
            consoleSpy.mockClear()
            
            // Change state
            shape.state = rectangleState
            shape.draw()
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Rectangle')
        })

        test('should change state from rectangle to circle', () => {
            const rectangleState = new RectangleState()
            const circleState = new CircleState()
            const shape = new Shape(rectangleState)
            
            // Initial state behavior
            shape.erase()
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Rectangle')
            
            consoleSpy.mockClear()
            
            // Change state
            shape.state = circleState
            shape.erase()
            expect(consoleSpy).toHaveBeenCalledWith('Erasing Circle')
        })

        test('should handle multiple state transitions', () => {
            const circleState = new CircleState()
            const rectangleState = new RectangleState()
            const shape = new Shape(circleState)
            
            // Circle -> Rectangle -> Circle
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Circle')
            
            shape.state = rectangleState
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Rectangle')
            
            shape.state = circleState
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Circle')
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
        })
    })

    describe('State Pattern Benefits', () => {
        test('should demonstrate polymorphic behavior based on state', () => {
            const shapes = [
                new Shape(new CircleState()),
                new Shape(new RectangleState()),
            ]
            
            shapes.forEach(shape => shape.draw())
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Drawing Circle')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Drawing Rectangle')
        })

        test('should handle same operation differently based on state', () => {
            const circleState = new CircleState()
            const rectangleState = new RectangleState()
            const shape = new Shape(circleState)
            
            // Same shape object, different behavior based on state
            shape.draw()
            shape.erase()
            
            shape.state = rectangleState
            shape.draw()
            shape.erase()
            
            expect(consoleSpy).toHaveBeenCalledTimes(4)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Drawing Circle')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Erasing Circle')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Drawing Rectangle')
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Erasing Rectangle')
        })

        test('should enable runtime state changes', () => {
            const shape = new Shape(new CircleState())
            
            // State can be changed at runtime
            const changeState = (newState: ShapeState) => {
                shape.state = newState
            }
            
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Circle')
            
            changeState(new RectangleState())
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Rectangle')
            
            changeState(new CircleState())
            shape.draw()
            expect(consoleSpy).toHaveBeenLastCalledWith('Drawing Circle')
        })

        test('should maintain context integrity across state changes', () => {
            const shape = new Shape(new CircleState())
            const originalShape = shape
            
            // Change state multiple times
            shape.state = new RectangleState()
            shape.state = new CircleState()
            shape.state = new RectangleState()
            
            // Shape context remains the same object
            expect(shape).toBe(originalShape)
            expect(shape.state).toBeInstanceOf(RectangleState)
            
            shape.draw()
            expect(consoleSpy).toHaveBeenCalledWith('Drawing Rectangle')
        })

        test('should support multiple shapes with independent states', () => {
            const circleShape = new Shape(new CircleState())
            const rectangleShape = new Shape(new RectangleState())
            
            // Each shape maintains its own state
            circleShape.draw()
            rectangleShape.draw()
            
            // Change one shape's state doesn't affect the other
            circleShape.state = new RectangleState()
            
            circleShape.draw()
            rectangleShape.draw()
            
            expect(consoleSpy).toHaveBeenCalledTimes(4)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Drawing Circle')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Drawing Rectangle')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Drawing Rectangle')
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Drawing Rectangle')
        })
    })
})
