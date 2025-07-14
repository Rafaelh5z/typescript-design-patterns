import { Mediator } from './Mediator'
import { Package } from './Package'

export class FedExPackage extends Package {
    
    mediator: Mediator

    constructor(mediator: Mediator) {
        super()
        this.mediator = mediator
    }

    ship() {
        if (this.mediator.canShip(this)) {
            console.log('FedEx Package Shipping blocked...waiting')
        }
    }

    deliver(): void {
        console.log('Delivering FedEx package')
        this.mediator.notifyAboutDelivery()

    }

    allowShipping(): void {
        console.log('FedEx Package: Ready to ship')
        this.ship()
    }

}