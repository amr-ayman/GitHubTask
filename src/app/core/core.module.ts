import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent, HeaderComponent, LayoutComponent, SidebarComponent} from './components';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CoreModule {
}
