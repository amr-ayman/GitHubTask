import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';

const overviewRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(overviewRoutes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {
}
