import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  let router: Router;
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(TodosService);
    router = {
      isActive: (url, exact) => true
    } as Router;
    service = new TodosService(router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar a lista de todos', () => {
    const isActiveSpy = spyOn(router, 'isActive');
    expect(service.getTodos()).toEqual([
      {
        id: '1',
        task: 'Aula DI',
        isCompleted: false,
      }
    ]);
    expect(isActiveSpy).toHaveBeenCalled();
  });
});
