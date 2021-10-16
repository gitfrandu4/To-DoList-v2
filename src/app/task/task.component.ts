import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { title: ""}
  @Output() meBorraron = new EventEmitter();
  @Output() meEditaron = new EventEmitter();

  title: string= "";
  readOnly: boolean = true;

  constructor() { 
  }

  ngOnInit(): void {
    this.title = this.task.title;
  }

  delete(){
    this.meBorraron.emit(this.task.id)
  }

  edit(){
    this.readOnly = !this.readOnly
  }

  save(){
    if(!this.readOnly) this.meEditaron.emit({id: this.task.id, title: this.title});
    this.readOnly = !this.readOnly
  }
}
