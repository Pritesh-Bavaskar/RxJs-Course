import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit {

  constructor() { }
  
  @ViewChild('myInput') myInput: ElementRef | undefined;
  @ViewChild('myInput2') myInput2: ElementRef | undefined;
  reqData:any;
  reqData2:any;
  ngAfterViewInit(): void {

    const  searchTerm = fromEvent<any>(this.myInput?.nativeElement, 'keyup').pipe(map(event => event.target.value),
    debounceTime(1000))
    searchTerm.subscribe(res =>{
      console.log(res)
      this.reqData = res;

      setTimeout(()=>{
        this.reqData = null
      },2000);
    })


    const  searchTerm2 = fromEvent<any>(this.myInput2?.nativeElement, 'keyup').pipe(map(event => event.target.value),
    debounceTime(1000),
    distinctUntilChanged())
    searchTerm2.subscribe(res =>{
      console.log(res)
      this.reqData2 = res;

      setTimeout(()=>{
        this.reqData2 = null
      },2000);
    })


  
  }
  

}
