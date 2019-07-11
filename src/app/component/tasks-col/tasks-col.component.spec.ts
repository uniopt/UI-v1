import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksColComponent } from './tasks-col.component';

describe('TasksColComponent', () => {
  let component: TasksColComponent;
  let fixture: ComponentFixture<TasksColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
