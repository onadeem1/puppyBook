import {createStore, applyMiddleware} from 'redux';
import mainReducer from './reducer';
import thunkMiddleWare from 'redux-thunk'

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleWare));
