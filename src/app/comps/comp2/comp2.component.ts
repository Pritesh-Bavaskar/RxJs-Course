import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
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
