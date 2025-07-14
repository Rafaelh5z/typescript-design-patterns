import { Observer } from './Observer'

export abstract class Subject {

    abstract attach(observer: Observer): void
    abstract detach(observer: Observer): void
    abstract notify(mediaFiles: string[]): void
}