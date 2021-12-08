import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg:any;
  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    //of operator
    const observable1=of('Item1','Item2','Item3')
    observable1.subscribe(res=>{
      console.log(res)
      this.du.print(res,"elcontainer")
    })
     //of operator-using object
    const observable2=of({a:'Item1',b:'Item2',c:'Item3'})
    observable2.subscribe(res=>{
      console.log(res)
     this.obsMsg=res
    })
     //from operator-using array
     const observable3=from(['Item11','Item22','Item33'])
     observable3.subscribe(res=>{
       console.log(res)
       this.du.print(res,"elcontainer3")
     
     })
    //from operator-using promise
     const promise=new Promise(resolve=>{
       setTimeout(()=>{
          resolve("Promise Resolved")
       },3000)
     })
     promise.then(res=>{
       console.log(res)
     })
     const observable4=from(promise)
     observable4.subscribe(res=>{
       console.log(res)
       this.du.print(res,"elcontainer4")
     })
    //from operator-using string
    const observable5=from("data coming from string")
    observable5.subscribe(res=>{
      console.log(res)
      this.du.print(res,"elcontainer5")
    })
  }

}
