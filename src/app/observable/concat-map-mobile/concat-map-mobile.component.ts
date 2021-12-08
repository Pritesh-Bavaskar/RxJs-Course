import { DesignUtilityService } from 'src/app/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map-mobile',
  templateUrl: './concat-map-mobile.component.html',
  styleUrls: ['./concat-map-mobile.component.scss']
})
export class ConcatMapMobileComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  notifydata = [
    {
      name: 'Facebook',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png',
      time: '4 seconds ago',
      img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg',
      strong: 'Name 1',
      p: 'Comment 1'
    },
    {
      name: 'Twitter',
      icon: 'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg',
      time: '3 seconds ago',
      img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg',
      strong: 'Name 2',
      p: 'Comment 2'
    },
    {
      name: 'Facebook',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png',
      time: '2 seconds ago',
      img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg',
      strong: 'Name 3',
      p: 'Comment 3'
    },
    {
      name: 'Twitter',
      icon: 'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg',
      time: '1 seconds ago',
      img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg',
      strong: 'Name 4',
      p: 'Comment 4'
    },
  ]

  ngOnInit(): void {
    from(this.notifydata)
      .pipe(
        // mergeMap(res => this.getHtml(res))
        concatMap(res => this.getHtml(res))
      ).subscribe(res => {
        console.log(res)
        this.du.print2(res, "elcontainer")
      })
  }
  getHtml(data: any) {
    return of(`
    <div class="header">
              <div class="app">
                <img src="${data.icon}" alt="na" width="20" height="20">
                ${data.name}
              </div>
              <div class="time"> ${data.time}</div>
    </div>
    <div class="body">
         <img class="item-img" src="${data.img}" alt="na" width="50" height="50">
         <strong>${data.strong}</strong>
         <p>${data.p}</p>
  </div>`).pipe(delay(2000))
  }
}
