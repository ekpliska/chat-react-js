import { combineReducers } from 'redux';
import dialogs from './dialogs';
import messages from './messages';
import user from './user';

// const reducers = ['messages', 'dialogs', 'user'];

// export default combineReducers(
//     reducers.reduce((initial, name) => {
//         initial[name] = require(`./${name}`).default;
//         return initial;
//     }, {})
// );

export default combineReducers({
    dialogs,
    messages,
    user
});