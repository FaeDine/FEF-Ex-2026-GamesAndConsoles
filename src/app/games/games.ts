import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game-service';

@Component({
  selector: 'app-games',
  standalone: false,
  styleUrl: './games.css',
  templateUrl: './games.html',
})
export class Games implements OnInit {
  games$?: Observable<Game[]>;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('consoleId');

    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.games$ = this.gameService.getGamesByConsole(id);
    } else {
      this.games$ = this.gameService.getGames();
    }
  }
}
