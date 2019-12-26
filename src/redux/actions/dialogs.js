import { dialogsAPI } from '../../utils/api';

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialog: dialogId => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG',
        payload: dialogId
    }),
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data))
        })
    }
};

export default actions;