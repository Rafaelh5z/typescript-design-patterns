import { Chair } from './Chair'
import { Furniture } from './Furniture'
import { FurnitureFactory } from './FurnitureFactory'
import { Table } from './Table'

export class ConcreteFurnitureFactory extends FurnitureFactory {

    public createFurniture(type: string): Furniture {

        if (type === 'chair') {

            return new Chair()
        } else if (type === 'table') {

            return new Table()
        } else {

            throw new Error('Furniture type not supported.')
        }
    }
}