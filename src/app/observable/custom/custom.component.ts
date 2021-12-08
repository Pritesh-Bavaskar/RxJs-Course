import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit,OnDestroy {
  itemstatus:any;
  itemstatus2:any;
  subs2!: Subscription;
  items:any=" ";
  itemsstatus3:any;

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {

//eg 1 (manual)
const cusObs1=Observable.create((observer:any)=>{
  setTimeout(()=>{
    observer.next('Item 1')
   
  },1000)
  setTimeout(()=>{
    observer.next('Item 2')
   
  },2000)
  setTimeout(()=>{
    observer.next('Item 3')
  },3000)
  setTimeout(()=>{
    observer.next('Item 4')
   // observer.error(new Error('limit exceed'))
  },4000)
  setTimeout(()=>{
    observer.next('Item 5')
    observer.complete()
  },5000)
 
})

//subscribe(data,error,completion)

cusObs1.subscribe((res:any)=>{
  //console.log(res)
  this.du.print(res,"elcontainer")
  
},(err:any)=>{
  this.itemstatus="error"
},()=>{
  this.itemstatus="completed"
})


 //eg 2 (Custom Interval Observable)
 const arr2=['item 1','item 2','item 3','item 4',]
 const cusObs2=Observable.create((observer:any)=>{
  let count=0;
  setInterval(()=>{
    observer.next(arr2[count])
    count++
    if(count>=6){
     // observer.complete()
     observer.error(new Error('limit exceed'))
    }
  },1000)
})
this.subs2=cusObs2.subscribe((res:any)=>{
 // console.log(res)
  this.du.print(res,"elcontainer2")
  
},(err:any)=>{
  this.itemstatus2="error"
},()=>{
  this.itemstatus2="completed"
})


//eg 3 (Random items)
const arr3=['item1','item2','item3','item4',]
const cusObs3=Observable.create((observer:any)=>{
  let count=0;
  setInterval(()=>{
    observer.next(arr3[count])
    count++
   if(count>=3){
    //observer.error(new Error('limit exceed'))
    observer.complete()
   }
  },1000)
})

cusObs3.subscribe((res:any)=>{
  console.log(res)
  this.items=res
  
  
},(err:any)=>{
  this.itemsstatus3="error"
},()=>{
  this.itemsstatus3="completed"
})

  }
  ngOnDestroy(){
    this.subs2.unsubscribe()
  }

}
