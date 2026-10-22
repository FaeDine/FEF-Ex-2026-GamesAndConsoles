import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { GAMES } from '../mocks/games-mock';

import { Observable, of, delay } from 'rxjs';
import { GameConsole } from '../models/game-console';
import { CONSOLES } from '../mocks/consoles-mock';

@Injectable({
    providedIn: 'root'
})

//@Service()
export class GameService {
    getGame(id: number): Observable<Game | undefined> {
        const gameFound = GAMES.find(g => g.id == id);
        return of(gameFound).pipe(delay(1500));
    }

    getGames(): Observable<Game[]> {
        return of(GAMES).pipe(delay(1500));
    }

    getGamesbyConsole(consoleId: number): Observable<Game[] | undefined> {
        const gameFound = GAMES.filter(g => g.consoleId == consoleId);
        return of(gameFound).pipe(delay(1500));

    }

    getGameDetail(id: number): Observable<{ game? : Game; console?: GameConsole }> {
        const game = GAMES.find(g => g.id == id);
        const console = !!game ? CONSOLES.find(c => c.id == game.consoleId) : undefined;
        return of({game, console}).pipe(delay(1500));

    }
}
