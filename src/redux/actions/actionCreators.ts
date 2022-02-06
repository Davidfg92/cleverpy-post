import axios from 'axios';
import { postActionTypes } from './actionTypes';
import { AppDispatch } from '../store';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export function loadPosts() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.get(`${apiUrl}`);
    dispatch({
      type: postActionTypes.LOAD_POST,
      payload: data,
    });
  };
}

export function deletePost(id:number) {
   return async (dispatch: AppDispatch) => {
     dispatch({
       type: postActionTypes.DELETE_POST,
       payload: id,
     })
   }
}