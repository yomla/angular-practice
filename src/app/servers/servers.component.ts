import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // Atribute selector(selecting by html element atribute)
  // selector: '.app-servers', // selecting by html class atribute, sidenote selecting by ID isn't suported by Angular
  selector: 'app-servers', 
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
