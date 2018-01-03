import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'] // Note: It's an array -may have multiple style files
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `] // Inline styles
})
export class AppComponent {
}
