import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumsFilmsComponent } from './colums-films.component';

describe('ColumsFilmsComponent', () => {
  let component: ColumsFilmsComponent;
  let fixture: ComponentFixture<ColumsFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumsFilmsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumsFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
