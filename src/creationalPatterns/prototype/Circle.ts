import { Shape } from './Shape'

export class Circle extends Shape {

    color: string 
    
    constructor(color: string) {

        super()
        this.color = color
    }

    print() : void {
        
        console.log(this.color + ' circle')
    }

    clone() : Shape {
        
        console.log('Cloning a ' + this.color + ' circle')
        return new Circle(this.color)
    }
}