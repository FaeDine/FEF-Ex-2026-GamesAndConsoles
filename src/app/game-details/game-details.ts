import { Component } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { GameConsole } from '../models/game-console';
//import { GAMES } from '../mocks/games-mock';
//import { CONSOLES } from '../mocks/consoles-mock';
import { Observable } from 'rxjs';
import { GameService } from '../service/game-service';
import { ConsoleService } from '../service/console-service';

@Component({
  selector: 'app-game-details',
  standalone: false,
  styleUrl: './game-details.css',
  templateUrl: './game-details.html',
})
export class GameDetails {
  game$?: Observable<Game | undefined>;
  console$?: Observable<GameConsole>;

  constructor(private route: ActivatedRoute, private GameService: GameService,
    private ConsoleService: ConsoleService) {}

  // Grab the parameter
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    // If the parameter exists, parse it into a Integer and
    // grab the game with the matching ID.
    if (!!idParam) {
      const id: number = parseInt(idParam);
      //this.game = GAMES.find(g => g.id == id);
      this.game$ = this.GameService.getGame(id);
    }


    // Get the console associated with this game.
    if (!!this.game$?.subscribe(g => g?.consoleId)) {
      consoleId: number = this.game$.subscribe(g => g?.consoleId);
      this.console$ = this.ConsoleService.getConsole(this.game$.subscribe(g => g?.consoleId));
      
    }
  }

}
