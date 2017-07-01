import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedAgGridComponent } from './themed-ag-grid.component';

describe('ThemedAgGridComponent', () => {
  let component: ThemedAgGridComponent;
  let fixture: ComponentFixture<ThemedAgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemedAgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemedAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
