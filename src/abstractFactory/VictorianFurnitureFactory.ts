import { Chair } from './Chair'
import { FurnitureFactory } from './FurnitureFactory'
import { Table } from './Table'
import { VictorianChair } from './VictorianChair'
import { VictorianTable } from './VictorianTable'

export class VictorianFurnitureFactory extends FurnitureFactory {

    createChair(): Chair {
        return new VictorianChair()
    }

    createTable(): Table {
        return new VictorianTable()
    }
}