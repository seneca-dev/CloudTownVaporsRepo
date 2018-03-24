import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBoardMainAdComponent } from './bill-board-main-ad.component';

describe('BillBoardMainAdComponent', () => {
  let component: BillBoardMainAdComponent;
  let fixture: ComponentFixture<BillBoardMainAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillBoardMainAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBoardMainAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
