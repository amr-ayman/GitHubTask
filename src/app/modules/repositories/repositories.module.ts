import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RepositoriesRoutingModule} from './repositories-routing.module';
import {RepositoriesComponent} from './pages/repositories/repositories.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    SharedModule
  ]
})
export class RepositoriesModule {
}
