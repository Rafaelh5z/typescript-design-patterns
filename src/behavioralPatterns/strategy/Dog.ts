import { Animal } from './Animal'

export class Dog extends Animal {

    makeSound(): string {
        return 'Woof'
    }
}