import { dialogsAPI } from '../../utils/api';
import { socket } from '../../core';

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialogId: dialogId => dispatch => {
        socket.emit('DIALOGS:JOIN', dialogId);
        dispatch({
            type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
            payload: dialogId
        })
    },
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data))
        })
    }
};

export default actions;