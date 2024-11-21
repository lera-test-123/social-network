const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {id: 7, message: state.newMessageText};
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE, newText: text})

export default dialogsReducer;