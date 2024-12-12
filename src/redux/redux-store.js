import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileSlice";
import dialogsReducer  from "./dialogsSlice";
import sidebarReducer from "./sidebarSlice";
import usersReducer from "./usersSlice";
import authReducer from "./authSlice";




let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
})

let store = configureStore({
  reducer: reducers
});

window.store = store;

export default store;
