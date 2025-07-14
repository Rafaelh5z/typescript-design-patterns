import { Animal } from './Animal'
import { Strategy } from './Strategy'

export class SpeakStrategy extends Strategy {
    animal: Animal

    constructor(animal: Animal) {
        super()
        this.animal = animal
    }

    execute(): string {
        return this.animal.makeSound()
    }
}