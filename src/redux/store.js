import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import session from './reducers/session';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, session);

const reducer = combineReducers({
  session,
});

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export default persistor;
