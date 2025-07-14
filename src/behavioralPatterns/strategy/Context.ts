import { Strategy } from './Strategy'

export class Context {
    
    strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    executeStrategy(): string {
        return this.strategy.execute()
    }
}