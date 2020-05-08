import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './pages/projects/projects.component';

const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
