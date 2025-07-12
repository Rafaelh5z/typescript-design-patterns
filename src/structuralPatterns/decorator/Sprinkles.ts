import { AbstractIceCream } from './AbstractIceCream'
import { IceCreamDecorator } from './IceCreamDecorator'

export class Sprinkles extends IceCreamDecorator {
    
    iceCream : AbstractIceCream

    constructor(iceCream : AbstractIceCream) {
        super()
        this.iceCream = iceCream
    }

    addToppings(): string {
        const currentOrder = this.iceCream.addToppings()
        return currentOrder + ' and Rainbow Sprinkles'
    }

    makeIceCream() : void {
        console.log('Here\'s Your Ice Cream Order')
        console.log(this.addToppings())
        console.log()
    }
}