import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { GAMES } from '../mocks/games-mock';

import { Observable, of, delay } from 'rxjs';

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
}
