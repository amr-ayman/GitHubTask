import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RepositoriesComponent} from './pages/repositories/repositories.component';

const repositoriesRoutes: Routes = [
  {
    path: '',
    component: RepositoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(repositoriesRoutes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule {
}
