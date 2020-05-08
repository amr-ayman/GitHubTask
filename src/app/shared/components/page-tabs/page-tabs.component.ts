import {Component, ComponentFactoryResolver, Output, EventEmitter, Input, OnChanges, OnInit} from '@angular/core';
import {PageTabInterface} from '../../interfaces/page-tab.interface';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'ayen-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss']
})
export class PageTabsComponent implements OnChanges, OnInit {
  @Output() tabChanged = new EventEmitter();
  @Input() pageTabs: PageTabInterface[] = [];
  activeTab: PageTabInterface;
  currentTab: string;

  constructor(private cfr: ComponentFactoryResolver, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.split('/');
        this.currentTab = url[(url.length - 1)];
        this.activeTab = this.pageTabs.find(x => x.name === this.currentTab);
      }
    });
  }

  ngOnChanges() {
    this.activeTab = this.pageTabs.find(x => x.name === this.currentTab);
  }

  ngOnInit() {
  }

  selectTab(index) {
    this.activeTab = this.pageTabs[index];
    this.tabChanged.emit(this.pageTabs[index].name);
    this.router.navigate([`${this.activeTab.componentUrl}`]);
  }
}
