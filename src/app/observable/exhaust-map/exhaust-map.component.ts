import { exhaustMap, fromEvent, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient,
    private du: DesignUtilityService) { }

  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  saveReq: any;
  fetching = false;
  @ViewChild('btn') btn: ElementRef | undefined;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    fromEvent(this.btn?.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      exhaustMap(() => this.onSave(this.num++))
    ).subscribe(res => {
      console.log(res)
      this.onFetch()
      this.fetching = false
    })
  }
  onSave(changes: any) {
    return this.http.put(this.url, { "data": changes })
  }
  onFetch() {
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res.data)
      this.saveReq = res.data;
    })
  }


}
