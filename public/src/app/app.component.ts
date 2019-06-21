import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title;
  tasks;
  showTask;
  newTask;
  update;

  constructor(private _httpService: HttpService){ }

  ngOnInit(){
    this.title = "Restful Tasks";
    this.newTask = {
      title: "",
      description: ""
    }
    this.update = false;
    // this.getTasks();
  }

  getTasks(){
    console.log('------getTasks() in app component------')
    let observable = this._httpService.getTasks();
    console.log(observable.subscribe(data => this.tasks = data['tasks']))
    observable.subscribe(data => this.tasks = data['tasks']);
    // console.log(this.tasks);
  }

  getThisTask(taskId){
    this.update = true;
    let observable = this._httpService.getOneTask(taskId);
    observable.subscribe(data => this.showTask = data['task'])
  }

  createTask(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log('==========',data,'===========');
    });
    this.newTask = {
      title: '',
      description: ''
    }
  }

  updateTask(){
    let observable = this._httpService.updateTask(this.showTask);
    observable.subscribe(data => {
      console.log('======== updating', data, '===========')
    })
  }
  deleteTask(taskID){
    let observable = this._httpService.deleteTask(taskID);
    observable.subscribe(data => {
      console.log('===== deleting', data, '=========');
    })
  }
}