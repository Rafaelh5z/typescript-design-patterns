import { AbstractIterator } from './AbstractIterator'

export abstract class Aggregator {
    abstract getIterator(): AbstractIterator
}