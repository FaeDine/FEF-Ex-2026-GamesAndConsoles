import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Game } from '../models/game';
import { GameConsole } from '../models/game-console';
import { GAMES } from '../mocks/games-mock';
import { CONSOLES } from '../mocks/consoles-mock';

/**
 * Always emitted, even when the id matched nothing.
 * game === undefined means "we looked, and there isn't one".
 */
export interface GameDetail {
  game?: Game;
  console?: GameConsole;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = GAMES;

  getGames(): Observable<Game[]> {
    return of(this.games).pipe(delay(800));
  }

  getGamesByConsole(consoleId: number): Observable<Game[]> {
    return of(this.games.filter(g => g.consoleId === consoleId)).pipe(delay(800));
  }

  /**
   * The service does the join, so the component waits on ONE Observable
   * and the template needs only one async pipe.
   */
  getGameDetail(id: number): Observable<GameDetail> {
    const game = this.games.find(g => g.id === id);
    const console = !!game ? CONSOLES.find(c => c.id === game.consoleId) : undefined;
    return of({ game, console }).pipe(delay(800));
  }
}
