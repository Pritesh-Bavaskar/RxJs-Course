import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { Search } from './observable/appInterface/search.interface';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor(private http: HttpClient) {}

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Name');
  videoEmit = new ReplaySubject(3);
  asyncvideoEmit = new AsyncSubject();

  url = 'https://jsonplaceholder.typicode.com/todos';

  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(val);
  }

  getSearches(searchTerm: any): Observable<Search> {
    return this.http.get<Search>(this.url + '?q=' + searchTerm);
  }

  print2(val: any, containerId: string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el);
  }

  getProducts(): Observable<Search> {
    return this.http.get<Search>(this.url);
  }
}
