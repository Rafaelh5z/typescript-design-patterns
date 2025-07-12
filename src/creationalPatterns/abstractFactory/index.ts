import { FurnitureFactory } from './FurnitureFactory'
import { ModernFurnitureFactory } from './ModernFurnitureFactory'
import { VictorianFurnitureFactory } from './VictorianFurnitureFactory'

function furnitureClient(factory: FurnitureFactory) {

    const chair = factory.createChair()
    const table = factory.createTable()

    chair.sitOn()
    table.eatOn()
}

// Create modern furniture
furnitureClient(new ModernFurnitureFactory())

// Create victorian furniture
furnitureClient(new VictorianFurnitureFactory())