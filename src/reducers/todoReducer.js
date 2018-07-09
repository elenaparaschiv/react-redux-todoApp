import {ACTIONS} from '../constants/todo.constants';

const defaultState = {
  allTodos: ['grab a chocholate', 'drink soda'],
  completedTodos: [],
}

const deleteTodo = (state, todo) => {
  state.allTodos.splice(todo.index, 1);
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

const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return addTodo(state, action.payload);
    case ACTIONS.DELETE_TODO:
      return deleteTodo(state, action.payload);
    default: return state
}}

export default todosReducer;
