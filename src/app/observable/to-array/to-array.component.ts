import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  sourseSub!: Subscription;

  users = [
    {name:'Annup',skill:'Angular'},
    {name:'Shikhar',skill:'Html,css'},
    {name:'Dhawan',skill:'Html,css'}
  ]

  array:any=[]


  ngOnInit(): void {
    const source=interval(1000)
    this.sourseSub=source.pipe(take(5),toArray()).subscribe(res=>{
      //console.log(res)
      
    })

    //eg-02
    const sourse2=from(this.users)
    sourse2.pipe(toArray()).subscribe(res=>{
     // console.log(res)
      this.array.push(res)
      console.log(this.array)
    })
   
  }

}
