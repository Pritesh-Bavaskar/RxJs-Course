import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { forkJoin, map, pluck, zip, take, fromEvent } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit, AfterViewInit {
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
        map(event => event.target.value),
        take(4)
      )


    const colorObs = fromEvent<any>(this.color?.nativeElement, 'change')
      .pipe(
        pluck('target', 'value'),
        take(3)
      )

    zip(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer1')
    })
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
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
