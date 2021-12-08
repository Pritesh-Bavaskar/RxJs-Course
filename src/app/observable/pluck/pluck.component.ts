import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }
  data1:any;
  data2:any;
  users = [
    {
      name: 'name1', 
      skills: 'skill1',
      job: {
        title: 'title1',
        exp:'exp1'
      }
    },
    {
      name: 'name2', 
      skills: 'skill2',
      job: {
        title: 'title2',
        exp:'exp1'
      }
    },
    {
      name: 'name3', 
      skills: 'skill3',
      job: {
        title: 'title3',
        exp:'exp1'
      }
    },
  ];
  ngOnInit(): void {
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()).subscribe(res =>{
      // console.log(res);
      this.data1 = res;
    })

    from(this.users).pipe(
      // map(data => data.name),
      pluck('job','title'),
      toArray()).subscribe(res =>{
      console.log(res);
      this.data2 = res;
    })
  }

}
