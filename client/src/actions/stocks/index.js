 

import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR,
  UPDATE_TODO_BY_ID_ERROR,
  DELETE_TODO_BY_ID_ERROR,
} from '../types';


import axios from 'axios';

 

export const getAllTodos = () => async dispatch => {
  try {
     const { data } = await axios.get('/api/stock');
    dispatch({ type: GET_ALL_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TODOS_ERROR, payload: 'Something went wrong, please refresh the page to try again'})
  }
};

export const getUserTodos = () => async dispatch => {
  try {
   const { data } = await axios.get('/api/user/stock', { headers: { 'authorization': localStorage.getItem('token')} } );
   dispatch({ type: GET_USER_TODOS, payload: data });
 } catch (e) {
   dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, userError: 'Please refresh the page and try again' });
 }
};

 

export const updateTodoCompletedById = (id, completed, text) => async dispatch => {
  try {
    await axios.put(`/api/user/stock/${id}`, {text, completed: !completed }, { headers: { 'authorization': localStorage.getItem('token')} } );
    const { data } = await axios.get('/api/user/stock', { headers: { 'authorization': localStorage.getItem('token')} } );
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_TODO_BY_ID_ERROR, payload: e });
  }
};

export const deleteTodoById = id => async dispatch => {
  try {
    await axios.delete(`/api/user/stock/${id}`, { headers: { 'authorization': localStorage.getItem('token')} } );
    const { data } = await axios.get('/api/user/stock', { headers: { 'authorization': localStorage.getItem('token')} } );
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_TODO_BY_ID_ERROR, payload: e });
  }
};

 