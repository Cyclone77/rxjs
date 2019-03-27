import { Component, OnInit } from '@angular/core';


// Subject 定义
class Subject {

  observerCollection = [];
  constructor() {
    this.observerCollection = [];
  }

  registerObserver(observer) {
    this.observerCollection.push(observer);
  }

  unregisterObserver(observer) {
    // tslint:disable-next-line:prefer-const
    let index = this.observerCollection.indexOf(observer);
    // tslint:disable-next-line:curly
    if (index >= 0) this.observerCollection.splice(index, 1);
  }

  notifyObservers() {
    this.observerCollection.forEach((observer) => observer.notify());
  }
}

// Observer 定义
class Observer {
  name: string;
  constructor(name) {
      this.name = name;
  }

  notify() {
      console.log(`${this.name} has been notified.`);
  }
}


@Component({
  selector: 'app-observer-pattern',
  templateUrl: './observer-pattern.component.html',
  styleUrls: ['./observer-pattern.component.css']
})
export class ObserverPatternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pattern();
  }

  pattern() {
    const subject = new Subject(); // 创建主题对象

    const observer1 = new Observer('semlinker'); // 创建观察者A - 'semlinker'
    const observer2 = new Observer('lolo'); // 创建观察者B - 'lolo'

    subject.registerObserver(observer1); // 注册观察者A
    subject.registerObserver(observer2); // 注册观察者B

    subject.notifyObservers(); // 通知观察者

    console.log('移除观察者semlinker');
    subject.unregisterObserver(observer1); // 移除观察者A
    subject.notifyObservers(); // 验证是否成功移除
  }
}
