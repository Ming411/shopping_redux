import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root_reducer';
import rootSaga from './sagas/root.saga';
const sagaMiddleware = createSagaMiddleware();
// ==================
/* devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
// 中间件
const storeEnhancer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, composeEnhancers(storeEnhancer));
// ==================

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
