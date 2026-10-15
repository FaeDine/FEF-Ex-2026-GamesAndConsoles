import { Component } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { GameConsole } from '../models/game-console';
import { GAMES } from '../mocks/games-mock';
import { CONSOLES } from '../mocks/consoles-mock';

@Component({
  selector: 'app-game-details',
  standalone: false,
  styleUrl: './game-details.css',
  templateUrl: './game-details.html',
})
export class GameDetails {
  game?: Game;
  console?: GameConsole;

  constructor(private route: ActivatedRoute) {}

  // Grab the parameter
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    // If the parameter exists, parse it into a Integer and
    // grab the game with the matching ID.
    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.game = GAMES.find(g => g.id == id);
    }

    // Get the console associated with this game.
    if (!!this.game?.consoleId) {
      this.console = CONSOLES.find(c => c.id == this.game?.consoleId);
    }
  }

}
