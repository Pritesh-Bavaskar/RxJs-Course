import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive:boolean=false;
  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    this.du.exclusive.subscribe(res =>{
      this.exclusive = res ;
    })
  }

}
