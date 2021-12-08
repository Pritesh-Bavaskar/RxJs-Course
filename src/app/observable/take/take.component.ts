import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }
  randomNames = ['Name 1','Name 2','Name 3','Name 4','Name 5'];

  ngOnInit(): void {
    let nameSource = from(this.randomNames)

    nameSource.pipe(take(3))
    .subscribe(res => {
      console.log(res);
      this.du.print(res,'elContainer1')
    })


    nameSource.pipe(takeLast(3))
    .subscribe(res => {
      console.log(res);
      this.du.print(res,'elContainer2')
    })

    nameSource.pipe(takeLast(3))
    .subscribe(res => {
      console.log(res);
      this.du.print(res,'elContainer2')
    })

    const source = interval(1000)
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click')

    source.pipe(map(res => 'Num ' +res),
    takeUntil(condition2))
    .subscribe(res => {
      console.log(res);
      this.du.print(res,'elContainer3')
    })
  }

}
