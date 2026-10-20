import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { GameConsole } from '../models/game-console';
import { CONSOLES } from '../mocks/consoles-mock';

import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

//@Service()
export class ConsoleService {

    getConsole(id: number): Observable<GameConsole | undefined> {
//    getConsole(id: number): Observable<GameConsole> {
        const consoleFound = CONSOLES.find(c => c.id == id);
        return of(consoleFound).pipe(delay(1500));
    }


    getConsoles(): Observable<GameConsole[]> {
        return of(CONSOLES).pipe(delay(1500));
    }
}