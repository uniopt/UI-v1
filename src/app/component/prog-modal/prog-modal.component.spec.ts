import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgModalComponent } from './prog-modal.component';

describe('ProgModalComponent', () => {
  let component: ProgModalComponent;
  let fixture: ComponentFixture<ProgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
