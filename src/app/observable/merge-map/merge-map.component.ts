import { DesignUtilityService } from 'src/app/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

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
      mergeAll()
    )
      .subscribe(
        (res => {
          this.du.print(res, 'elContainer2')
        }
        )
      )


    source.pipe(
      mergeMap(res => this.getdata(res)),

    )
      .subscribe(
        (res => {
          this.du.print(res, 'elContainer3')
        }
        )
      )


  }
  getdata(data: any) {
    return of(data + ' video uploaded');
  }

}


