import { Mediator } from './Mediator'
import { Package } from './Package'

export class UPSPackage extends Package {
    
    mediator: Mediator

    constructor(mediator: Mediator) {
        super()
        this.mediator = mediator
    }

    ship() {
        if (this.mediator.canShip(this)) {
            console.log('UPS Package Shipping blocked...waiting')
        }
    }

    deliver(): void {
        console.log('Delivering UPS package')
        this.mediator.notifyAboutDelivery()

    }

    allowShipping(): void {
        console.log('UPS Package: Ready to ship')
        this.ship()
    }
}