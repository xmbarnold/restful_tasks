import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks';
  tasks;
  showTask;

  constructor(private _httpService: HttpService){ }

  ngOnInit(){
    this.getTasks();
  }

  getTasks(){
    console.log('------getTasks() in app component------')
    let observable = this._httpService.getTasks();
    console.log(observable.subscribe(data => this.tasks = data['tasks']))
    observable.subscribe(data => this.tasks = data['tasks']);
    // console.log(this.tasks);
  }

  getThisTask(taskId){
    let observable = this._httpService.getOneTask(taskId);
    observable.subscribe(data => this.showTask = data['task'])
  }
}