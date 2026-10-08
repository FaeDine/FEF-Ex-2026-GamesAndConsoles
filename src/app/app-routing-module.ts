import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consoles } from './consoles/consoles';
import { Games } from './games/games';
import { ConsoleDetails } from './console-details/console-details';
import { GameDetails } from './game-details/game-details';

const routes: Routes = [
  { path: 'consoles', component: Consoles },
  { path: 'console/:id', component: ConsoleDetails },
  { path: 'games', component: Games },
  { path: 'game/:id', component: GameDetails },
  { path: 'games/console/:consoleId', component: Games },
  { path: '', redirectTo: '/consoles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
