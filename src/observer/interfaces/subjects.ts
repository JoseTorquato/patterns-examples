import { Observer } from "./observer";

export interface Subject {
    subscriber(observer: Observer): void;

    unsubscriber(observer: Observer): void;

    notify(): void;
}
