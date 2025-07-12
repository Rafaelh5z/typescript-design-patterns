import { Burger } from './Burger'

export class BurgerBuilder {

    private name: string
    private cheese: boolean = false
    private bacon: boolean = false
    private lettuce: boolean = false
    private tomato: boolean = false

    constructor(name: string) {
        this.name = name
    }

    addCheese(): BurgerBuilder {
        this.cheese = true
        return this
    }

    addBacon(): BurgerBuilder {
        this.bacon = true
        return this
    }

    addLettuce(): BurgerBuilder {
        this.lettuce = true
        return this
    }

    addTomato(): BurgerBuilder {
        this.tomato = true
        return this
    }

    build(): Burger {
        return new Burger(this.name, this.cheese, this.bacon, this.lettuce, this.tomato)
    }
}

