import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

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
