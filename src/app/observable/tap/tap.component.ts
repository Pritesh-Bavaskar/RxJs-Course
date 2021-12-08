import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    let obs : Subscription;

    const arr = ['name1','name2','name3','name4','name5','name6']
    const source = interval(1000);

    obs = source.pipe(tap(res => {
      if(res == 4){
        obs.unsubscribe();
      }
    }),
    map(res => arr[res]))
    .subscribe(res => {
      console.log(res)
       this.du.print(res,'elContainer1');
    })
  }

}
