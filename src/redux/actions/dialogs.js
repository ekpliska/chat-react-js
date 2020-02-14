import { dialogsAPI } from '../../utils/api';

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialogId: dialogId => dispatch => {
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