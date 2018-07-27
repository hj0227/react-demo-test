import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';

//import createLogger from 'redux-logger';

//const logger = createLogger();


import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
	thunk/*,logger*/
)(createStore);

export function configureStore (initialState) {
	try{
		const store = createStoreWithMiddleware(rootReducer,initialState);
		return store;
	}catch(e){
		// alert(e);
		console.log(e);
	}
}

export const store = configureStore();