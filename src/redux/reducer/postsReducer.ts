import { AnyAction } from 'redux';
import { Post } from '../../interfaces/postInterface';
import { postActionTypes } from '../actions/actionTypes';

export function postsReducer(state:Array<Post> = [], action: AnyAction) {
    let newState:Array<Post>;
    switch (action.type) {
      case postActionTypes.LOAD_POST:
        newState = action.payload;
        break;
      
      case postActionTypes.DELETE_POST:
        newState = state.filter((elem:Post) => elem.id !== action.payload);
        break;
        
  
      default:
        newState = state;
        break;
    }
    
    return newState;
  }