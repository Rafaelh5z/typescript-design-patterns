
export class Burger {

    constructor(private name: string, private cheese: boolean, private bacon: boolean, private lettuce: boolean, private tomato: boolean) {
        this.name = name
        this.cheese = cheese
        this.bacon = bacon
        this.lettuce = lettuce
        this.tomato = tomato
    }

    showDetails() : string {

        let details = 'This ' + this.name  + ' Burger has: '

        if(this.cheese) {
            details = details + ' Cheese, '
        }

        if(this.bacon) {
            details = details + ' Bacon, '
        }

        if(this.lettuce) {
            details = details + ' Lettuce, '
        }

        if(this.tomato) {
            details = details + ' Tomato '
        }

        return details
    }
}

