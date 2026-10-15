import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GameService, GameDetail } from '../services/game-service';

@Component({
  selector: 'app-game-details',
  standalone: false,
  styleUrl: './game-details.css',
  templateUrl: './game-details.html',
})
export class GameDetails implements OnInit {
  detail$?: Observable<GameDetail | undefined>;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.detail$ = this.gameService.getGameDetail(id);
    }
  }
}
