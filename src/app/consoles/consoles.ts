import { Component } from '@angular/core';
// Import the GameConsole data model we created earlier.
import { GameConsole } from '../models/game-console';
// Import the Console data service
import { ConsoleService } from '../service/console-service';
// Import the mock data
// import { CONSOLES } from '../mocks/consoles-mock';

@Component({
  selector: 'app-consoles',
  standalone: false,
  styleUrl: './consoles.css',
  templateUrl: './consoles.html',
})
export class Consoles {
  // Create a property that is an array of consoles based
  // on what exists in the mock data.
  //consoles: GameConsole[] = CONSOLES;
  consoles: GameConsole[] = [];

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoles = this.consoleService.getConsoles();
  }
}
