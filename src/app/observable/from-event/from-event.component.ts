import { DesignUtilityService } from './../../design-utility.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private designUtility: DesignUtilityService) { }
  @ViewChild("addbtn")
  addbtn!: ElementRef;
  ngOnInit(): void {


    
  }

  ngAfterViewInit(){
    let counnt=0;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
      //console.log("Item : " +counnt++)
      this.designUtility.print("Item : "+counnt++,"elContainer")
    })
  }

}
