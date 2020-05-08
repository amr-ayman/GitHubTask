import {NgModule} from '@angular/core';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {WelcomeRoutingModule} from './welcome-routing.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule {
}
