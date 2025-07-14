import { Furniture } from './Furniture'

export class Table extends Furniture {
    
    public assemble(): void {
    
        console.log('Assembling a table.')
    }
}