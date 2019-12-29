import { combineReducers } from 'redux';
import todo_rducer from './todo';

export default combineReducers({
  todos: todo_rducer
});