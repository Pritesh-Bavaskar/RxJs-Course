import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { createMayBeForwardRefExpression } from '@angular/compiler';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {

  namesource = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5']
  colorsource = ['red', 'green', 'blue', 'yellow']
  @ViewChild('name') name: ElementRef | undefined;
  @ViewChild('color') color: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name?.nativeElement, 'change')
      .pipe(
        map(event => event.target.value)
      )


    const colorObs = fromEvent<any>(this.color?.nativeElement, 'change')
      .pipe(
        pluck('target', 'value')
      )

    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer1')
    })

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2')
    })

  }
  createBox(name: any, color: any, containerId: any) {
    let el = document.createElement('div')
    el.innerText = name;
    el.setAttribute("class", color);
    document.getElementById(containerId)?.appendChild(el);
  }



}
