import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consoles } from './consoles/consoles';
import { Games } from './games/games';

const routes: Routes = [
  { path: 'consoles', component: Consoles },
  { path: 'games', component: Games },
  { path: '', redirectTo: '/consoles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
