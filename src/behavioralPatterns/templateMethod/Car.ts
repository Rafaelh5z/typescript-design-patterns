export abstract class Car {

    abstract drive() : void 

    startEngine(): void {
        console.log('Starting Engine')
    }

    stopEngine(): void {
        console.log('Stoping Engine')
    }

    // template method 
    run() : void {
        this.startEngine()
        this.drive()
        this.stopEngine()
    }
}