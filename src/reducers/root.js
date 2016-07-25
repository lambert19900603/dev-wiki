import { combineReducers } from 'redux';
import user from './user';
import keywords from './keywords';

export default combineReducers({
    user,
    keywords
});
