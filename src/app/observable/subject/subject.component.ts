import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName = 'Name';
  constructor(private du:DesignUtilityService) { 
    this.du.username.subscribe(res =>{
      this.userName = res;
    })
  }

  ngOnInit(): void {
    this.du.exclusive.next(true);

  }

  ngOnDestroy(){
    this.du.exclusive.next(false);
  }

}
