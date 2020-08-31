import createDataContext from './createDataContext'
import server from '../api/server';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'add_blogpost':
      return [...state, action.payload ];
   
    case 'edit_blogpost': 
      return state.map(el => {
        return el.id === action.payload.id ? action.payload : el;
      });
   
    case 'delete_blogpost':
      return state.filter(el => el.id !== action.payload.id);

    default:
     return state;
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const results = await server.get('/users/1742/posts');
    const { data } = results.data;
    const posts = data.map(el => ({ id: el.id, title: el.title, body: el.body }))
    dispatch({ type: 'get_blogposts', payload: posts  });
  }
}

const addBlogPost = (dispatch) => {
  return async (title, body, callback) => {
    const result = await server.post('/users/1742/posts', { body: body, title });
    const { data } = result.data;

    dispatch({ type: 'add_blogpost', payload: { id: data.id, title: data.title, body: data.body } });
    if (callback) {
      callback();
    }
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, body, callback) => {
    const result = await server.put(`/users/1742/posts/${id}`, { body: body, title });
    const { data } = result.data;

    dispatch({ type: 'edit_blogpost', payload: { id: data.id, title: data.title, body: data.body } });
    if (callback) {
      callback();
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: { id } })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
