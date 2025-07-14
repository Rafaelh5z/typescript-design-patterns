import { Train } from './Train'

export abstract class Command {
    abstract execute(train: Train): void
}