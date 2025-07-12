import { IceCream } from './IceCream'
import { Sprinkles } from './Sprinkles'
import { Syrup } from './Syrup'

function decoratorClient() {

    const iceCream = new IceCream('Chocolate')


    const iceCreamWithSprinkles = new Sprinkles(iceCream)
    iceCreamWithSprinkles.makeIceCream()

    const iceCreamWithSprinkesAndChocolateSyrup = new Syrup( iceCreamWithSprinkles )
    iceCreamWithSprinkesAndChocolateSyrup.makeIceCream()
}

decoratorClient()