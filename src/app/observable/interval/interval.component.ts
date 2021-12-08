import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }
  item:any;
  itemsubscription!: Subscription;
  ngOnInit(): void {

    //const broadcaseItem=interval(1000)
    //timer(delay,interval)
    const broadcaseItem=timer(3000,1000)
    this.itemsubscription = broadcaseItem.subscribe(res=>{
      console.log(res)
      this.du.print("Item : "+res,"elContainer")
      this.du.print("Item : "+res,"elContainer2")
      this.du.print("Item : "+res,"elContainer3")


      if(res>=5){
        this.itemsubscription.unsubscribe()
      }
    })
  }
 

}
