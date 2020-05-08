import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StarsComponent} from './pages/stars/stars.component';

const starsRoutes: Routes = [
  {
    path: '',
    component: StarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(starsRoutes)],
  exports: [RouterModule]
})
export class StarsRoutingModule {
}
