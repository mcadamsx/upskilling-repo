import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReusableComponentComponent } from "./reusable-component/reusable-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReusableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
