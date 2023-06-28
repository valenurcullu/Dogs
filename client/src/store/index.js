import { legacy_createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

 const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

 export default store;

//  The thunk middleware allows the use of asynchronous actions in Redux, which is not natively supported by Redux.
//el root reducer combina todos los reducer individuales en uno solo y permite q sean modificados