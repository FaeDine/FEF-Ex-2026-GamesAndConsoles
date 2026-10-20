import { Service } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GameConsole } from '../models/game-console';
import { Injectable } from '@angular/core';
import { ConsoleService } from '../service/console-service';
import { ActivatedRoute } from '@angular/router';
//import { CONSOLES } from '../mocks/consoles-mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-console-details',
  standalone: false,
  styleUrl: './console-details.css',
  templateUrl: './console-details.html',
})
export class ConsoleDetails {
  //console?: GameConsole;
  console$?: Observable<GameConsole | undefined>;

  constructor(private route: ActivatedRoute, private consoleService: ConsoleService) {}

  ngOnInit(): void {
    // Grab the ConsoleID from the URL
    const idParam = this.route.snapshot.paramMap.get('id');

    // Only dispplay the console details with the matching ID.
    if (!!idParam) {
      const id: number = parseInt(idParam);
      //this.consoles$ = this.consoleService.getConsoles();
      this.console$ = this.consoleService.getConsole(id);
    }
  }


}
