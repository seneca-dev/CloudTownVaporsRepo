import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardFrameComponent } from './billboard-frame.component';

describe('BillboardFrameComponent', () => {
  let component: BillboardFrameComponent;
  let fixture: ComponentFixture<BillboardFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
