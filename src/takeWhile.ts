import * as Rx from 'rxjs';

const interval$ = Rx.Observable.interval(500);
interval$
  .takeWhile(v => v < 10)
  .subscribe(v => console.log(v));