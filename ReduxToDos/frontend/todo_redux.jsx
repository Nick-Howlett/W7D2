import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveToDos, receiveToDo} from './actions/todo_actions';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors'



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.receiveToDo = receiveToDo
  window.receiveToDos = receiveToDos
  window.allTodos = allTodos
  ReactDOM.render(<Root store={store} />, root );
})