import {ACTIONS} from '../constants/todo.constants';


export const addTodo = todo => ({
  type: ACTIONS.ADD_TODO,
  payload: todo,
})

export const deleteTodo = (todo, index) => ({
  type: ACTIONS.DELETE_TODO,
  payload: {
    todo,
    index
  }
})

export const completeTodo = todo => ({
  type: ACTIONS.COMPLETE_TODO,
  payload: todo,
})


export default {
  addTodo,
  deleteTodo,
  completeTodo
}