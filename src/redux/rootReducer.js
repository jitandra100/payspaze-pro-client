import { combineReducers } from 'redux';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { authSlice } from './slicers/auth';
import { userSlice } from './slicers/user';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
});

export { rootPersistConfig, rootReducer };

