import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profile/slice";
import dialogsReducer  from "./dialogs/slice";
import sidebarReducer from "./sidebar/slice";
import usersReducer from "./users/slice";
import authReducer from "./auth/slice";
import chatReducer from "./chat/slice";


let rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
  chat: chatReducer,
})

let store = configureStore({
  reducer: rootReducer
});

// window.store = store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
