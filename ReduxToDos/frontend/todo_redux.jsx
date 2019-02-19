import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveToDos, receiveToDo} from './actions/todo_actions'

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.store = store;
  window.receiveToDo = receiveToDo
  window.receiveToDos = receiveToDos
  ReactDOM.render(<h1>TODO Zap!</h1>, root );
})