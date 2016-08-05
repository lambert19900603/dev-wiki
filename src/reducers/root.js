import { combineReducers } from 'redux';
import pages from './pages';
import posts from './posts';
import categories from './categories';
import tags from "./tags";
import post from "./post";

export default combineReducers({
    pages,
    posts,
    categories,
    tags,
    post
});
