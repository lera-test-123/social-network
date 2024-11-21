import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _state: {
    profilePage: {
      tmpPosts: [
        {id: 1, message: "Hi, how are you", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 5},
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Mark"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Larysa"},
        {id: 4, name: "LyaLya"},
        {id: 5, name: "Anastasia"},
        {id: 6, name: "Polina"}
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What are you doing?"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Hi"},
        {id: 6, message: "Hi"}
      ],
      newMessageText: '',
    },
    sidebar: [
      {id: 1, name: "Mark"},
      {id: 2, name: "Anna"},
      {id: 3, name: "Larysa"}
    ]
  },
  _callSubscriber () {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;

