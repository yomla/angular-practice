import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class AssignmentComponent implements OnInit {

  show = false;
  numberOfClicks = [];
  
  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.show = !this.show;
    this.numberOfClicks.push(this.numberOfClicks.length + 1);
  }
}
