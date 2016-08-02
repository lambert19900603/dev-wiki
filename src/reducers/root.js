import { combineReducers } from 'redux';
import pages from './pages';
import posts from './posts';
import categories from './categories';

export default combineReducers({
    pages,
    posts,
    categories
});
