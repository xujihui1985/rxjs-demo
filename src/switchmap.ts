import * as Rx from 'rxjs';

// Example 1: Restart interval every 5 seconds

const source = Rx.Observable.timer(0, 5000);
const example = Rx.Observable.interval(500);

source
  .switchMapTo(example, (outer, inner, outerv, innerv) => ({
    outer, inner, outerv, innerv
  }))
  .subscribe(val => console.log(val));
