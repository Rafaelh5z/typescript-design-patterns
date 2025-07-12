import { AbstractIceCream } from './AbstractIceCream'

export class IceCream extends AbstractIceCream {
    
    flavor : string 

    constructor(flavor : string) {
        super()
        this.flavor = flavor
    }

    addToppings() : string {
        return '2 scoops of ' + this.flavor
    }
}