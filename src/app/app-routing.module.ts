import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapboxComponent } from './mapbox/mapbox.component'
import { StatsboxComponent } from './statsbox/statsbox.component'

const routes: Routes = [
  { path: 'mapbox', component: MapboxComponent },
  { path: 'stats', component: StatsboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
