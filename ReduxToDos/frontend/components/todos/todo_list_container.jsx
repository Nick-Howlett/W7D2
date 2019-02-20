import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveToDo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)}
}

const mapDispatchToProps = dispatch => ({
  receiveToDo: todo => dispatch(receiveToDo(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);