import * as Rx from 'rxjs';

interface Counter {
  count: number;
}
// Example 1: Restart interval every 5 seconds
const inc = (acc: Counter): Counter => ({ count: acc.count + 1 });
const source = Rx.Observable.timer(0, 5000);
const interval$ = Rx.Observable.interval(500);

// interval$
//   .mapTo(inc)
//   .scan((acc, curr) => {
//     return curr(acc);
//   })
//   .subscribe(x => console.log(x));