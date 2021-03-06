import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPageListComponent } from './page-list.component';

describe('PageListComponent', () => {
  let component: CmsPageListComponent;
  let fixture: ComponentFixture<CmsPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
