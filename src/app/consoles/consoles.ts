import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameConsole } from '../models/game-console';
import { ConsoleService } from '../services/console-service';

@Component({
  selector: 'app-consoles',
  standalone: false,
  styleUrl: './consoles.css',
  templateUrl: './consoles.html',
})
export class Consoles implements OnInit {
  // The $ suffix is the convention for "this holds an Observable"
  consoles$?: Observable<GameConsole[]>;

  // Angular creates the service and hands it to us
  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.consoles$ = this.consoleService.getConsoles();
  }
}
