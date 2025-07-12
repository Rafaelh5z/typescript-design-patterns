import { Chair } from './Chair'
import { FurnitureFactory } from './FurnitureFactory'
import { ModernChair } from './ModernChair'
import { ModernTable } from './ModernTable'
import { Table } from './Table'

export class ModernFurnitureFactory extends FurnitureFactory {

    createChair(): Chair {
        return new ModernChair()
    }

    createTable(): Table {
        return new ModernTable()
    }
}