import {ADD_POST, GET_POSTS, DELETE_POST} from './types';
import axios from 'axios';

export const addPost = async (post) => dispatch =>{
  console.log(post, '<-- post from action');
  axios
    .post('/api/blog/addpost', post)
    .then(res => dispatch({
      type: ADD_POST,
      payload: res.data
    }))
}
