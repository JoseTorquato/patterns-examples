import { FootballSubject } from "./src/observer/footballSubject";
import { UserObserver } from "./src/observer/userObserver";

const observerA = new UserObserver('A');
const observerB = new UserObserver('B');

const subject = new FootballSubject();
subject.subscriber(observerA);
subject.subscriber(observerB);

subject.notify();

subject.unsubscriber(observerB);

subject.notify();