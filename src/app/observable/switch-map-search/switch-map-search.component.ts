import { DesignUtilityService } from './../../design-utility.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  pluck,
  switchMap,
} from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss'],
})
export class SwitchMapSearchComponent implements AfterViewInit {
  searchResults: any;
  searchResultCount = 0;

  constructor(private du: DesignUtilityService) {}

  @ViewChild('searchForm') searchForm: NgForm | undefined;
  ngAfterViewInit(): void {
    const formValue = this.searchForm?.valueChanges;
    // map(data => data ['searchTerm'])
    formValue!
      .pipe(
        filter(() => this.searchForm?.valid!),
        pluck('searchTerm'),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((res) => this.du.getSearches(res))
      )
      .subscribe((res: any) => {
        this.searchResults = res;
        this.searchResultCount = Object.keys(res).length;
        // console.log(this.searchResults)
      });
  }
}
