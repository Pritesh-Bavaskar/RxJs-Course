import { Component, ElementRef, OnInit } from '@angular/core';
import { forkJoin, from, merge } from 'rxjs';
declare let Chart: any;
@Component({
  selector: 'app-external-lib',
  templateUrl: './external-lib.component.html',
  styleUrls: ['./external-lib.component.scss'],
})
export class ExternalLibComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  mernesource: any = [];

  ngOnInit(): void {
    const source1 = [0, 10, 5, 2, 20, 30, 45];
    const source2 = [10, 11, 20, 30, 20, 50, 60];

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'july',
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset - 1',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: source1,
        },
      ],
    };
    const data2 = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset - 2',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: source2,
        },
      ],
    };
    const config = {
      type: 'bar',
      data: data,
      options: {},
    };
    const config2 = {
      type: 'bar',
      data: data2,
      options: {},
    };
    var myChart = new Chart(document.getElementById('myChart'), config);
    var myChart2 = new Chart(document.getElementById('myChart2'), config2);

    const obs1 = from(source1);
    const obs2 = from(source2);

    //eg using merge

    merge(obs1, obs2).subscribe((res) => {
      this.mernesource.push(res);
      // console.log(res)
    });

    console.log(this.mernesource);

    const labels2 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'july',
      'aug',
      'sept',
      'oct',
      'nov',
      'dec',
    ];
    const data3 = {
      labels: labels2,
      datasets: [
        {
          label: 'Dataset - 3',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.mernesource,
        },
      ],
    };
    const config3 = {
      type: 'bar',
      data: data3,
      options: {},
    };
    var myChart3 = new Chart(document.getElementById('myChart3'), config3);

    //eg using fork join

    forkJoin(obs1, obs2).subscribe((res) => {
      // console.log(res)
      const labels2 = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'july',
        'aug',
        'sept',
        'oct',
        'nov',
        'dec',
      ];
      const data3 = {
        labels: labels2,
        datasets: [
          {
            label: 'Dataset - 4',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: res,
          },
        ],
      };
      const config3 = {
        type: 'bar',
        data: data3,
        options: {},
      };
      var myChart3 = new Chart(document.getElementById('myChart4'), config3);
    });
  }
}
