import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FollowingComponent} from './pages/following/following.component';

const followingRoutes: Routes = [
  {
    path: '',
    component: FollowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(followingRoutes)],
  exports: [RouterModule]
})
export class FollowingRoutingModule {
}
