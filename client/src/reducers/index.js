import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
 import { ADD_TODO } from '../actions/types';
//  import resultReducer from './resultReducer'
 
 
export default combineReducers({
  // result: resultReducer,
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
  form: formReducer
  .plugin({
    'addTodo': (state, action) => {
      switch(action.type) {
        case ADD_TODO:
          return undefined;
        default:
          return state;
      }
    }
  })
});
