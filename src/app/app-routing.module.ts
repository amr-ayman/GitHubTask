import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './core/components';
import {AuthGuard} from './core/services/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'github',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'repositories',
        loadChildren: () => import('./modules/repositories/repositories.module').then(m => m.RepositoriesModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'stars',
        loadChildren: () => import('./modules/stars/stars.module').then(m => m.StarsModule)
      },
      {
        path: 'followers',
        loadChildren: () => import('./modules/followers/followers.module').then(m => m.FollowersModule)
      },
      {
        path: 'following',
        loadChildren: () => import('./modules/following/following.module').then(m => m.FollowingModule)
      },
      {path: '', redirectTo: '/github/overview', pathMatch: 'full'},
      {path: '**', redirectTo: '/overview'}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
