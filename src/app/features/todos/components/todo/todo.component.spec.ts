import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

fdescribe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: '1',
      isCompleted: false,
      task: 'fazer todo',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the todo is input is changed', async () => {
    const id: HTMLElement = fixture.nativeElement.querySelector('#t-todo-id');
    expect(id.textContent).toEqual(`Id: 1`);

    component.todo = {
      id: '2',
      isCompleted: true,
      task: 'todo feito',
    }
    component.changeDetectorRef.detectChanges();
    const id2: HTMLElement = fixture.nativeElement.querySelector('#t-todo-id');
    expect(id2.textContent).toEqual(`Id: 2`);

  });
});
