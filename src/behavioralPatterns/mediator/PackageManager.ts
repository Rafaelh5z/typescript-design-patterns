import { Mediator } from './Mediator'
import { Package } from './Package'

export class PackageManager extends Mediator {

    isPackagePacked: boolean
    packages: Package[] = []

    constructor(isPackagePacked: boolean) {
        super()
        this.isPackagePacked = isPackagePacked
    }

    canShip(pack: Package): boolean {
        if (this.isPackagePacked) {
            this.isPackagePacked = false
            return true
        }
        this.packages.push(pack)
        return false
    }

    notifyAboutDelivery(): void {
        this.isPackagePacked = true
        
        if (this.packages.length > 0) {
            const firstPackage = this.packages.shift()
            if (firstPackage) {
                firstPackage.allowShipping()
            }
        }
    }
}