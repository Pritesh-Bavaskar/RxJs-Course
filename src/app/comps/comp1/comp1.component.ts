import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  username:string | undefined;
  constructor(private du:DesignUtilityService) { 
    this.du.username.subscribe(res =>{
      this.username = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uname:any){
    // console.log(uname.value)
    this.du.username.next(uname.value)
   
  }
}
