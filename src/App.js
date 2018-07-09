import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, completeTodo} from './actions/todo.actions';
import './App.css';


const mapStateToProps = state => ({
  allTodos: state.todoReducer.allTodos,
  todosCompleted: state.todoReducer.todosCompleted,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (index) => dispatch(deleteTodo(index)),
  completeTodo: (todo) => dispatch(completeTodo(todo)),
});

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
    newValue : ''
  }
 }

  render() {
    const {allTodos, todosCompleted, addTodo, deleteTodo, completeTodo}=this.props;
    const{newValue} = this.state;

    const getNewTodo = (event) =>{
     this.setState({newValue: event.target.value})
    }

    const submitNewTodo = (newValue) => {
      addTodo(newValue);
      this.setState({newValue: ''});
    }

    return (
      <div className="app">
        <div className="all-todos">
          <h2> Todo list: </h2>
          <div>
            {
              allTodos.map((todo, index) =>
              <div key={index}>
                <p className="todo-item" onClick={() => completeTodo(index)}>
                  {todo}
                </p>
                <button onClick={() => deleteTodo(index)}>
                  Delete Todo
                </button>
              </div>
            )
            }
          </div>
          <input className="new-todo" value={this.state.newValue} onChange={(event) => getNewTodo(event)} />
          <button onClick={() => submitNewTodo(newValue)}>
            Add Todo
          </button>
        </div>
        <div className="todos-completed">
          <h2>Todos completed: </h2>
          {
            todosCompleted.map((todoCompleted, index) =>
              <div>
                <p className="todo-completed">
                  {todoCompleted}
                </p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
