import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orari } from './orari';

describe('Orari', () => {
  let component: Orari;
  let fixture: ComponentFixture<Orari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orari]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orari);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
