import { Sedan } from './Sedan'
import { SUV } from './SUV'

function templateMethodClient() {

    const sedan = new Sedan()
    sedan.run()

    const suv = new SUV()
    suv.run()
}

templateMethodClient()