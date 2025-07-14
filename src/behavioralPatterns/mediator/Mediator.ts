import { Package } from './Package'

export abstract class Mediator {
    abstract canShip(pack: Package): boolean
    abstract notifyAboutDelivery(): void
}