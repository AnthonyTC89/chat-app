import { createStore, combineReducers } from 'redux';
import session from './reducers/session';
import chat from './reducers/chat';

const reducer = combineReducers({
  session,
  chat,
});

const store = createStore(reducer);

export default store;
