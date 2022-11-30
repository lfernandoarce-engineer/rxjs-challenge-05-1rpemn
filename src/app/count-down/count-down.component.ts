import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  public countDownRemain = 5;
  public numberPath = './app/count-down/numbers/5.PNG';
  private intervalSubs: Subscription;

  private initCountDown() {
    this.intervalSubs = interval(1000)
      .pipe(take(5))
      .subscribe(() => {
        --this.countDownRemain;
        //this.numberPath = `numbers/${this.countDownRemain}.PNG`;
      });
  }

  public restartCountDown() {
    this.intervalSubs.unsubscribe();
    this.countDownRemain = 5;
    //this.numberPath = 'numbers/5.PNG';
    this.initCountDown();
  }

  ngOnInit() {
    this.initCountDown();
  }

  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }
}
