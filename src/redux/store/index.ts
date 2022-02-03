import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Post } from '../../interfaces/postInterface';
import { postsReducer } from '../reducer/postsReducer'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  export default function configureStore(initialState:Array<Post>) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
    return createStore(
      postsReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk)),
    );
  }
  
  export const store = configureStore([]);
  export type RootState = typeof store.getState
  export type AppDispatch = typeof store.dispatch
  