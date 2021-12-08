import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  option1Available(){
    return true;
  }
  option2Available(){
    return false;
  }

  opt1={
    msg:"option 1 available",
    id:1,
  }
  opt2={
    msg:"option 2 available",
    id:2,
  }
  
  noopt={
    msg:"options not available",
    id:3,
  }

  datastatus={
    msg:"data received succefully",
    id:4,
  }

  promiseval:string | undefined;
  promise:any;

  ngOnInit(): void {

    //promise code
    let buyLaptop=new Promise((resolve,reject)=>{
      //resolve("promise resolved ")
      if(this.option1Available()){
       // resolve("opt 1 available")
       resolve(this.opt1)
      }else if(this.option2Available()){
       // resolve("opt 2 available")
        resolve(this.opt2)
      }else{
        //reject("no opt available")
        reject(this.noopt)
      }
    })
    buyLaptop.then(res=>{
      console.log("then code=>"+JSON.stringify(res))
      this.promiseval=JSON.stringify(res)
    }).catch(res=>{
      console.log("catch code=>"+res)
      this.promiseval=JSON.stringify(res)
    })

    //async/await code starts
    // console.log(this.getData())
    // this.getData().then(res=>{
    //   console.log("data:"+res)
    // })

    this.promise=new Promise ((resolve,reject)=>{
      setTimeout(()=>{
          resolve(this.datastatus)
      },3000)
    })

    this.getData()


  }
  //async keyword always return promise
  async getData(){
    let response=await this.promise
    console.log(response)
   }
 
 
   //eg 1
   fetch1val:any;
   fetch1(){
     this.fetch1val="fetching data..."
     this.promise.then((res:any)=>{
       console.log(res)
       this.fetch1val=JSON.stringify(res)
     })
   }
 
   //eg 2
   fetch2val:any;
   async fetch2(){
     this.fetch2val="fetching data..."
     let data=await this.promise
     this.fetch2val=JSON.stringify(data)
   }
 
   //eg 3
   //using promise
   fetch3val:any;
   placeholderData=fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
   //  fetch3(){
   //   this.fetch3val="fetching data..."
 
   //   //using promise
   //   this.placeholderData.then(res=>{
   //   this.fetch3val=JSON.stringify(res)
   //   })
    
   // }
 //eg 3
   //using async/await
   async fetch3(){
     this.fetch3val="fetching data..."
     let data=await this.placeholderData;
     this.fetch3val=JSON.stringify(data)
   }

}
