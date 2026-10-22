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
  gdetail$?: Observable<{ game?: Game; console?: GameConsole }>;

  constructor(private route: ActivatedRoute, private GameService: GameService,
    private ConsoleService: ConsoleService) {}

  // Grab the parameter
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    // If the parameter exists, parse it into a Integer and
    // grab the game with the matching ID.
    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.gdetail$ = this.GameService.getGameDetail(id);
    }
  }
}
