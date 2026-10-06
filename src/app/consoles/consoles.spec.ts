import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Consoles } from './consoles';

describe('Consoles', () => {
  let component: Consoles;
  let fixture: ComponentFixture<Consoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Consoles],
    }).compileComponents();

    fixture = TestBed.createComponent(Consoles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
