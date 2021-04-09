import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),

    //Para poder ver en la extension de redux devtools y tambien en cualquier navegador que no la tenga
    typeof window === 'object' && 
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;