import axios from 'axios';
import { postActionTypes } from './actionTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export function loadPosts() {
    return async (dispatch) => {
      const { data } = await axios.get(`${apiUrl}`);
      dispatch({
        type: postActionTypes.LOAD_POST,
        payload: data,
      });
    };
  }