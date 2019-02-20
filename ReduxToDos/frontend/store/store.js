import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';



const configureStore = (preloadedState = {}) => (createStore(rootReducer, preloadedState, applyMiddleware(logger)));

export default configureStore