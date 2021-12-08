import { Component, OnInit } from '@angular/core';
import { delay, retryWhen, scan } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http : HttpClient ) { }
  user:any;
  fetching : boolean = false;
  status = 'No Data';
  ngOnInit(): void {
  }
  fetchDetails(){
    this.fetching = true;
    this.http.get('https://jsonplaceholder.typicode.com/users/1').
    pipe(
      // retry(3))
      retryWhen(err => err.pipe(
        delay(1000),
        scan((retryCount)=>{
          if(retryCount >=5){
            throw err;
          }else{
            retryCount = retryCount + 1;
            console.log(retryCount)
            this.status = 'Retrying Attempt #'+retryCount;
            return retryCount;
          }
        },0)
      ))
    )
      .
    subscribe(res => {
      //console.log(res)
      this.user = res
      this.status = 'Data Fetched'
      this.fetching = false
    },
    (err)=>{
        //console.log(err)
        this.status = 'Problem Fetching Data'
        this.fetching = false
    })
  }
    

}
