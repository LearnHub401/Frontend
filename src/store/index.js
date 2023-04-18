import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from './middleware/thunk';
import userReducer from './user';
import courseReducer from './course';

let reducers = combineReducers({
  user: userReducer,
  course: courseReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
