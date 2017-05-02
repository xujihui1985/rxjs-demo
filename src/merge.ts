import * as Rx from 'rxjs';

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const start$ = Rx.Observable.fromEvent(startButton, 'click');
const interval$ = Rx.Observable.interval(1000);
const stop$ = Rx.Observable.fromEvent(stopButton, 'click');
const reset$ = Rx.Observable.fromEvent(resetButton, 'click');

const data = { count: 0 };
const reset = acc => data;
const inc = acc => ({ count: acc.count + 1 });

const intervalThatStops$ = interval$.takeUntil(stop$);
const incOrReset$ = Rx.Observable.merge(
  intervalThatStops$.mapTo(inc),
  reset$.mapTo(reset)
);

start$
  .switchMapTo(incOrReset$)
  .startWith(<any>data)
  .scan((acc, curr) => curr(acc))
  .subscribe(x => console.log(x));
