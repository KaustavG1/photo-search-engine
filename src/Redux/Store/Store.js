import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducers/RootReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);    

// const store = createStore(RootReducer, applyMiddleware(thunk));
const store = createStore(RootReducer, enhancer);

export default store;