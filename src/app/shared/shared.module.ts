import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageTabsComponent} from './components/page-tabs/page-tabs.component';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [PageTabsComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    PageTabsComponent,
    FilterPipe
  ]
})
export class SharedModule {
}
