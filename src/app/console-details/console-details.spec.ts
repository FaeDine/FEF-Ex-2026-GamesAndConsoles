import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsoleDetails } from './console-details';

describe('ConsoleDetails', () => {
  let component: ConsoleDetails;
  let fixture: ComponentFixture<ConsoleDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
