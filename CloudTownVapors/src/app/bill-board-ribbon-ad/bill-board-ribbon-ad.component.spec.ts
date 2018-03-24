import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBoardRibbonAdComponent } from './bill-board-ribbon-ad.component';

describe('BillBoardRibbonAdComponent', () => {
  let component: BillBoardRibbonAdComponent;
  let fixture: ComponentFixture<BillBoardRibbonAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillBoardRibbonAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBoardRibbonAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
