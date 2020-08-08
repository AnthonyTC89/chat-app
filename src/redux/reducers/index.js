import { combineReducers } from 'redux';
import session from './session';
import chat from './chat';

const reducer = combineReducers({
  session,
  chat,
});

export default reducer;
