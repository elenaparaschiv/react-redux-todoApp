import {ACTIONS} from '../constants/todo.constants';


export const addTodo = todo => ({
  type: ACTIONS.ADD_TODO,
  payload: todo,
})

export const deleteTodo = index => ({
  type: ACTIONS.DELETE_TODO,
  payload: index,
})

export const completeTodo = index => ({
  type: ACTIONS.COMPLETE_TODO,
  payload: index,
})


export default {
  addTodo,
  deleteTodo,
  completeTodo,
}