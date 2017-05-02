import * as Rx from 'rxjs';

interface IData {
  count: number;
}

// Example 1: Restart interval every 5 seconds

const source = Rx.Observable.timer(0, 5000);
const example = Rx.Observable.interval(500);
const data = { count: 0 };

const button = document.getElementById('btn');
Rx.Observable.fromEvent(button, 'click')
  .startWith<IData>({ count: 0 })
  .scan((acc) => {
    return {
      count: acc.count + 1,
    }
  })
  .subscribe(val => console.log(val));
