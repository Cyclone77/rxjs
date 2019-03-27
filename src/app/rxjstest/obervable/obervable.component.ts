import { Component, OnInit } from '@angular/core';

import { Observable, Observer, timer } from 'rxjs';

@Component({
  selector: 'app-obervable',
  templateUrl: './obervable.component.html',
  styleUrls: ['./obervable.component.css']
})
export class ObervableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.create();
  }

  create() {
    // 在 RxJS 中为我们提供了很多创建 Observable 对象的方法，其中 create 是最基本的方法。它是 Observable 类的静态属性 —— static create: Function，也是创建 Observable 对象的工厂方法。

    // tslint:disable-next-line:no-shadowed-variable
    const observable$ = Observable.create((observer: Observer<any>) => {
      observer.next('hello');
      observer.next('world');
      setTimeout(() => {
        observer.next('async');
      }, 100);
      observer.complete();
    });

    // console.log('start');
    // observable$.subscribe(val => console.log(val));
    // console.log('end');

    // 创建一个观察者
    const observer = {
      next: (val) => {
        console.log(val + '观察者');
      },
      // error: error => {
      //   console.log(error);
      // },
      // complete: () => {
      //   console.log('complete');
      // }
    };

    // 订阅创建的观察者
    observable$.subscribe(observer);

    observable$.subscribe(
      value => { console.log(value); },
      error => { console.log('Error: ', error); },
      () => { console.log('complete'); }
    );

    const source$: Observable<number> = timer(1000, 1000);
    // 取得subscription对象
    const subscription = source$.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log('complete!');
      },
      error: (error) => {
          console.log('Throw Error: ' + error);
      }
    });

    // 5秒后取消订阅
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
