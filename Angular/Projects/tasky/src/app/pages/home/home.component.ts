import {Component} from '@angular/core';
import {AddTaskComponent} from '../../components/add-task/add-task.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  imports: [
    AddTaskComponent
  ],
  styleUrl: "./home.component.scss"
})

export class HomeComponent { }
