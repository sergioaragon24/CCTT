import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProftogradoComponent } from './proftogrado.component';

describe('ProftogradoComponent', () => {
  let component: ProftogradoComponent;
  let fixture: ComponentFixture<ProftogradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProftogradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProftogradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
