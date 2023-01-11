import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDialogDeleteDialogComponent } from './bank-dialog-delete-dialog.component';

describe('BankDialogDeleteDialogComponent', () => {
  let component: BankDialogDeleteDialogComponent;
  let fixture: ComponentFixture<BankDialogDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDialogDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDialogDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
