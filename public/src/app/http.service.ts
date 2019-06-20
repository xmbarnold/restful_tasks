import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getOneTask('5d0ab9af5845ec5dd8014b10');
  }
  getTasks(){
    console.log('------getTasks() from httpService------');
    console.log(this._http.get('api/tasks'));
    return this._http.get('/api/tasks');
  }
  getOneTask(taskId){
    return this._http.get(`/api/tasks/${taskId}`);
  }
  createTask(newTask){
    return this._http.post('/api/tasks', newTask);
  }
  updateTask(task){
    return this._http.put('/api/tasks', task);
  }
  deleteTask(taskID){
    console.log('http.service.ts - taskID param', taskID)
    return this._http.delete(`/api/tasks/${taskID}`);
  }
}