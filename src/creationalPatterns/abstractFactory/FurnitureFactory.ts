import { Chair } from './Chair'
import { Table } from './Table'

export abstract class FurnitureFactory {
    
    abstract createChair(): Chair
    abstract createTable(): Table
}