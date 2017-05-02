import * as Rx from 'rxjs';

// take until another observable emit

const interval$ = Rx.Observable.interval(1000);

const intervalThatStopAfter5mins$ = interval$
  .takeUntil(Rx.Observable.timer(5000));

const source = Rx.Observable.timer(0, 10000);

source
  .switchMapTo(intervalThatStopAfter5mins$)
  .subscribe(x => console.log(x));