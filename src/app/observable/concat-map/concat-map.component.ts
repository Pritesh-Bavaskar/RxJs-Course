import { Component, OnInit } from '@angular/core';
import { concatAll, map, of, delay, from, concatMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    source.pipe(map(res => this.getdata(res)))
      .subscribe(((res: any) => res.subscribe((res2: any) => {
        // console.log(res2)
        this.du.print(res2, 'elContainer1')
      })))


    source.pipe(map(res => this.getdata(res)), concatAll())
      .subscribe(((res: any) => {
        // console.log(res2)
        this.du.print(res, 'elContainer2')
      }))


    source.pipe(concatMap(res => this.getdata(res)))
      .subscribe(((res: any) => {
        // console.log(res2)
        this.du.print(res, 'elContainer3')
      }))


  }
  getdata(data: any) {
    return of(data + ' video uploaded').pipe(delay(2000));
  }
}
