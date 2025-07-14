import { Furniture } from './Furniture'

export abstract class FurnitureFactory {

    public abstract createFurniture(type: string): Furniture
}