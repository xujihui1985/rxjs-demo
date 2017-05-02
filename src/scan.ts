import * as Rx from 'rxjs';

interface IData {
  count: number;
}

// Example 1: Restart interval every 5 seconds

const source = Rx.Observable.timer(0, 5000);
const example = Rx.Observable.interval(500);
const data = { count: 0 };

source
  .switchMapTo(example)
  .scan((acc) => {
    return {
      count: acc.count + 1,
    };
  }, { count: 0 })
  .subscribe(val => console.log(val))