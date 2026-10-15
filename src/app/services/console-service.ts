import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { GameConsole } from '../models/game-console';
import { CONSOLES } from '../mocks/consoles-mock';

/**
 * A wrapper that is ALWAYS emitted, even when nothing matched.
 * This lets the template tell "still loading" (nothing emitted yet)
 * apart from "loaded, but not found" (emitted, console is undefined).
 */
export interface ConsoleLookup {
  console?: GameConsole;
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private consoles: GameConsole[] = CONSOLES;

  getConsoles(): Observable<GameConsole[]> {
    return of(this.consoles).pipe(delay(800));
  }

  getConsole(id: number): Observable<ConsoleLookup> {
    const found = this.consoles.find(c => c.id === id);
    return of({ console: found }).pipe(delay(800));
  }
}
