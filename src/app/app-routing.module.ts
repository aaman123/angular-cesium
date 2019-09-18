import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivewindowsComponent } from './livewindows/livewindows.component';

const routes: Routes = [
  {
    path: 'live', component: LivewindowsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
