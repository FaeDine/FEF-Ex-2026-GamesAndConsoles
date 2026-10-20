import { Component } from '@angular/core';
import { Game } from '../models/game';
import { GAMES } from '../mocks/games-mock'
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../service/game-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  standalone: false,
  styleUrl: './games.css',
  templateUrl: './games.html',
})

export class Games {
  games$?: Observable<Game[] | undefined>;

  constructor(private route: ActivatedRoute, private GameService: GameService) { }

  ngOnInit(): void {
    // Grab the console parameter from the URL
    const idParam = this.route.snapshot.paramMap.get('consoleId');

    // If a parameter for a console ID exists, create an array of games
    // that use the consoles ID.
    if (!!idParam) {
      const id: number = parseInt(idParam);
      //this.games = GAMES.filter(g => g.consoleId == id);
      this.games$ = this.GameService.getGamesbyConsole(id);
      //this.games$ = GAMES.filter(g => g.consoleId == id);
    // If no console ID is given as a parameter, use the full list of games.
    } else {
      this.games$ = this.GameService.getGames();
    }
  }
}
