import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { GameConsole } from '../models/game-console';
import { CONSOLES } from '../mocks/consoles-mock';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

//@Service()
export class ConsoleService {

    getConsoles(): Observable<GameConsole[]> {
        return of(CONSOLES);
    }
}