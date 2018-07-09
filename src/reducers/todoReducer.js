import {ACTIONS} from '../constants/todo.constants';

const defaultState = {
  allTodos: [],
  todosCompleted: [],
}

const deleteTodo = (state, index) => {
  state.allTodos.splice(index, 1);
  const newState = {
    ...state,
    allTodos: [...state.allTodos]
  }
  return newState;
}

const addTodo = (state, todo) => {
  const newState = {
    ...state,
    allTodos: [
      ...state.allTodos,
      todo,
    ]
  }
  return newState;
}

const completeTodo = (state, index) => {
  const completedTodo = state.allTodos.splice(index, 1)[0]
  const newState = {
    ...state,
    allTodos: [...state.allTodos],
    todosCompleted : [
      ...state.todosCompleted,
      completedTodo
    ]
  }
  return newState;
}

const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return addTodo(state, action.payload);
    case ACTIONS.DELETE_TODO:
      return deleteTodo(state, action.payload);
    case ACTIONS.COMPLETE_TODO:
      return completeTodo(state, action.payload);
    default: return state
}}

export default todosReducer;