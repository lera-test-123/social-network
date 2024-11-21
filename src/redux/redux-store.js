import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileSlice";
import dialogsReducer  from "./dialogsSlice";
import sidebarReducer from "./sidebarSlice";


let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
})

let store = configureStore({
  reducer: reducers
});

export default store;
