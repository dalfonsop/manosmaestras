import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoserviciosComponent } from './listadoservicios.component';

describe('ListadoserviciosComponent', () => {
  let component: ListadoserviciosComponent;
  let fixture: ComponentFixture<ListadoserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
