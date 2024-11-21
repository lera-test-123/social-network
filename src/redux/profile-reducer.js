const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialsState =
  {
  tmpPosts: [
    {id: 1, message: "Hi, how are you", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 5},
  ],
  newPostText: ''
}

const profileReducer = (state = initialsState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {id: 3, message: state.newPostText, likesCount: 0};
      state.tmpPosts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text,})


export default profileReducer;