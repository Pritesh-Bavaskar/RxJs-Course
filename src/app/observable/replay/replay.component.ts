import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  user1List: any  = [
    'Angular 1 ',
    'Angular 2 ',
  ];
  user2List: any = [];
  user3List: any = [];
  subscribeMode2:boolean=false;
  subscribeMode3:boolean=false;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
  methodInterval:boolean=false;
  intSubs:Subscription| undefined;
  constructor(private du:DesignUtilityService) { 
    this.du.videoEmit.subscribe(res =>{
      console.log(res)
      this.user1List.push(res);
    })
  }

  ngOnInit(): void {
  }
  onVideoAdd(video:any){
    // console.log(video)
    this.du.videoEmit.next(video);
  }

  user2Subscribe(){
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }else{

      this.subscription2 = this.du.videoEmit.subscribe(res =>{
        console.log(res)
        this.user2List.push(res);
      })
    }
      this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe(){
    if(this.subscription3){
      this.subscription3.unsubscribe();
    }else{

      this.subscription3 = this.du.videoEmit.subscribe(res =>{
        console.log(res)
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }
  toggle(){
    const broadCastVdo = interval(1000)
    if(!this.methodInterval){
      
      this.intSubs = broadCastVdo.subscribe(res => {
        this.du.videoEmit.next('Video' + res)
      })
    }else{
      this.intSubs?.unsubscribe()
    }

    this.methodInterval = !this.methodInterval
  }
}
