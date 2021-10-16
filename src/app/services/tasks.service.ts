import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlJsonServer: string = "http://localhost:3000/tasks";
  
  constructor() { }

  getAll(): Promise<Task[]>{
    return axios
      .get<Task[]>(this.urlJsonServer)
      .then((resp) => resp.data)
  }

  postTask(newTask: Task): Promise<Task>{
    return axios.post<Task>(this.urlJsonServer, newTask)
      .then((resp) => {
        // alert(JSON.stringify(resp))
        return resp.data;
      })
  }

  deleteTask(id: number): Promise<Task>{
    return axios.delete<Task>(this.urlJsonServer+"/"+id)
      .then(resp => resp.data)
  }

  editTask(task: Task): Promise<Task>{
    return axios.put<Task>(`${this.urlJsonServer}/${task.id}`, {title: task.title})
      .then(resp => resp.data);
  }
}
