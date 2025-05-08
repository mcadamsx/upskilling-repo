import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
   count = signal(0);
   protected increaseCount() {
    this.count.update((prev) => prev + 1);
   } 
} 