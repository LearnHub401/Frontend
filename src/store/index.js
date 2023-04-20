import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from './middleware/thunk';
import userReducer from './user';
import courseReducer from './course';
import activeCourseReducer from './activeCourse';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

let reducers = combineReducers({
  activeCourse: activeCourseReducer,
  user: userReducer,
  course: courseReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store =  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store);
