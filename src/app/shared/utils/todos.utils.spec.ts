import { Todo } from "../types/todo.type"
import { markAsCompleted } from "./todos.utils"

describe('TodosUtils', () => {

  describe('markAsCompleted', () => {

    it('deve marcar como isCompleted true', () => {
      const input: Todo = {
        id: '1',
        isCompleted: false,
        task: 'Fazer testes'
      };
      const result: Todo = {
        id: '1',
        isCompleted: true,
        task: 'Fazer testes'
      }
      expect(markAsCompleted(input)).toEqual(result);
    })

    it('deve permanecer como isCompleted true caso já seja um todo completado', () => {
      const input: Todo = {
        id: '1',
        isCompleted: true,
        task: 'Fazer testes'
      };
      const result: Todo = {
        id: '1',
        isCompleted: true,
        task: 'Fazer testes'
      }
      expect(markAsCompleted(input)).toEqual(result);
    })

  })

})
