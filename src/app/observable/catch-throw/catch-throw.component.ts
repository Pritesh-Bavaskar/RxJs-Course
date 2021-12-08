import { DesignUtilityService } from './../../design-utility.service';
import {
  AfterContentInit,
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  interval,
  filter,
  pluck,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  fromEvent,
} from 'rxjs';

@Component({
  selector: 'app-catch-throw',
  templateUrl: './catch-throw.component.html',
  styleUrls: ['./catch-throw.component.scss'],
})
export class CatchThrowComponent implements OnInit, AfterViewInit {
  @ViewChild('clickbtn') clickbtn: ElementRef | undefined;
  error: boolean = false;
  fetching: boolean = false;
  allProducts: any;
  searchResults: any;
  searchForm: any;
  constructor(private du: DesignUtilityService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.clickbtn?.nativeElement, 'click').subscribe((res) => {
      this.fetching = true;
      this.du.getProducts().subscribe(
        (res: any) => {
          this.allProducts = res;
          console.log(this.allProducts);
          this.searchResults = res;
          this.fetching = false;
        },
        (err: any) => {
          console.log('this', err);
          this.fetching = false;
          this.error = true;
        }
      );
    });
  }
}
