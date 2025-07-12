import { ConcreteFurnitureFactory } from './ConcreteFurnitureFactory'

function factoryClient() {

    const factory = new ConcreteFurnitureFactory()
    
    const chair = factory.createFurniture('chair')
    chair.assemble()

    const table = factory.createFurniture('table')
    table.assemble()
}

factoryClient()