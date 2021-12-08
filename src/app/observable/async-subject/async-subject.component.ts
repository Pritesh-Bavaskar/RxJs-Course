import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';


@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVdoEmit: any;

  constructor(private du: DesignUtilityService) {
  }

  ngOnInit(): void {
    this.du.asyncvideoEmit.subscribe(res => {
      this.asyncVdoEmit = res;
    })
  }

  onVideoAdd(video: any) {
    console.log(video)
    this.du.asyncvideoEmit.next(video);
  }



  onComplete() {
    this.du.asyncvideoEmit.complete();
  }
}
