import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FollowersComponent} from './pages/followers/followers.component';

const followersRoutes: Routes = [
  {
    path: '',
    component: FollowersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(followersRoutes)],
  exports: [RouterModule]
})
export class FollowersRoutingModule {
}
