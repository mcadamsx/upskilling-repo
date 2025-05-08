import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'
import {CommonModule} from '@angular/common'


@Component({
  imports:[CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService){}
  userData: any [] = []


  ngOnInit(): void {
    this.getData()
  }

  public getData(){
    this.userService.getData().subscribe((response)=>{
    console.log(response);
    
    })
  }
 
  
}
