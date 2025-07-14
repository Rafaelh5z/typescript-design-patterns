import { FedExPackage } from './FedExPackage'
import { PackageManager } from './PackageManager'
import { UPSPackage } from './UPSPackage'

function mediatorClient() {

    const packageManager = new PackageManager(true)

    const upsPackage = new UPSPackage(packageManager)
    const fedExPackage = new FedExPackage(packageManager)

    upsPackage.ship()
    fedExPackage.ship()
    upsPackage.deliver()
    fedExPackage.deliver()
}

mediatorClient()