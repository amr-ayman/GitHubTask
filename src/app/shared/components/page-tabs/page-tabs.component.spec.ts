import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTabsComponent } from './page-tabs.component';

describe('PageTabsComponentComponent', () => {
  let component: PageTabsComponent;
  let fixture: ComponentFixture<PageTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
