import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDetailComponent } from './detail-machine.component';

describe('MachineDetailComponent', () => {
  let component: MachineDetailComponent;
  let fixture: ComponentFixture<MachineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
