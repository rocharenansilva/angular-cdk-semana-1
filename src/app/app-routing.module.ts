import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnounceComponent } from './announce/announce.component';
import { SelectionComponent } from './selection/selection.component';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';

const routes: Routes = [
  { path: 'selection', component: SelectionComponent },
  { path: 'selection-details', component: SelectionDetailsComponent },
  { path: 'announce', component: AnnounceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
