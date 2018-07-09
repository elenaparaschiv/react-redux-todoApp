import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from './actions/todo.actions';


const mapStateToProps = state => ({
  allTodos: state.todoReducer.allTodos,
  completedTodos: state.todoReducer.completedTodos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (todo, index) => dispatch(deleteTodo(todo, index)),

});


class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
    newValue : ''
  }

 }

  render() {
    const {allTodos, addTodo, deleteTodo}=this.props;
    const{newValue} = this.state;
    console.log('newValue', newValue);

    const getNewTodo = (event) =>{
     console.log(event.target.value);
     this.setState({newValue: event.target.value})
    }

    const whichToDelete = (todo, index) => {
      deleteTodo(todo, index);
      console.log('index', index);
    }
    return (
      <div className="App">
        <h2>Todo App </h2>
        <div>
          {
            allTodos.map((todo, index) =>
            <div  key={index}>
              <p>{todo}</p>
              <button onClick={() => whichToDelete(todo, index)}>
                Delete Todo
              </button>
            </div>
          )
          }
        </div>
        <input value={this.state.newValue} onChange={(event) => getNewTodo(event)} />
        <button onClick={() => addTodo(newValue)}>
         Add Todo
         </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

