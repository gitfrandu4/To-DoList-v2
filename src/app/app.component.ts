import { Component, VERSION } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './models/task';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  newTask: Task = {
    title: ""
  }

  title: string = "";

  constructor(private tasksService: TasksService,
    private notificationService: NotificationService) {
    this.tasksService.getAll()
      .then(res => {
        this.tasks = res
      })
  }

  save() {
    if (this.title != "") {
      this.tasksService.postTask(this.newTask = { title: this.title })
        .then(task => {
          this.tasks.push(task) // Este task tiene el ide asignado por el server!
        });
      this.title = ""
      this.newTask = { title: "" } // Necesario 'reiniciar' el objeto
    }
  }

  delete(id: number) {
    this.tasksService.deleteTask(id)
      .then(res => {
        this.tasks = this.tasks.filter(task => task.id != id)
        this.notificationService.warning("La tarea se ha borrado correctamente");
        if(this.tasks.length === 0) this.notificationService.success("¡Felicidades!", "Has completado todas tus tareas");
      });
  }

  edit(taskEdited: Task) {

    let i: number = this.tasks.findIndex(task => task.id === taskEdited.id)
    let task: Task = this.tasks[i]

    if (task.title === taskEdited.title) {
      this.notificationService.info("La tarea no se ha modificado");
    } else {
      // console.log(`Estoy editando: ${task.id}, ${task.title}`)
      this.tasksService.editTask(task)
        .then(() => {
          this.notificationService.success("La tarea se ha editado");
        })
    }
  }
}
