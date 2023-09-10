import { Observer } from "./interfaces/observer";
import { Subject } from "./interfaces/subjects";

export class FootballSubject implements Subject {
    private observers: Observer[] = []

    subscriber(observer: Observer): void {
        console.log(`Observer ${observer.name} subscribed...`)
        this.observers.push(observer)
        console.log(`Subscribed success`)
    }

    unsubscriber(observer: Observer): void {
        console.log(`Observer ${observer.name} unsibscribed...`)
        this.observers.splice(this.observers.indexOf(observer), 1)
        console.log('Unsubscriberd is success.')
    }

    notify(): void {
        console.log('Notifying observers...')
        this.observers.map(observer => observer.update('Notify'))
    }
};
