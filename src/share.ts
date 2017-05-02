import * as Rx from 'rxjs';

const interval$ = Rx.Observable.interval(1000);
const example$ = interval$
  .do(x => console.log(x))
  .mapTo("RESULT")
  .share();

example$.subscribe(x => {
  console.log(111, x);
});

example$.subscribe(x => {
  console.log(222, x);
});
