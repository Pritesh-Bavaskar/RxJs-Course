import { Component, OnInit } from '@angular/core';
import { map, mergeAll, mergeMap, of, switchAll, delay, from, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    source.pipe(map(res => this.getdata(res)))
      .subscribe((res => res.subscribe(res2 => {
        // console.log(res2)
        this.du.print(res2, 'elContainer1')
      })))



    source.pipe(
      map(res => this.getdata(res)),
      switchAll()
    )
      .subscribe(
        (res => {
          this.du.print(res, 'elContainer2')
        }
        )
      )


    source.pipe(
      switchMap(res => this.getdata(res)),

    )
      .subscribe(
        (res => {
          this.du.print(res, 'elContainer3')
        }
        )
      )


  }
  getdata(data: any) {
    return of(data + ' video uploaded').pipe(delay(1000));
  }
}
