import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgColComponent } from './prog-col.component';

describe('ProgColComponent', () => {
  let component: ProgColComponent;
  let fixture: ComponentFixture<ProgColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
