import { messagesAPI } from '../../utils/api';

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    addMessage: message => (dispatch, getState) => {
        const { dialogs } = getState();
        const { currentDialogId } = dialogs;
        if (currentDialogId === message.dialog._id) {
            dispatch({
                type: 'MESSAGES:ADD_MESSAGE',
                payload: message
            });
        }
    },
    fetchSendMessage: (dialogId, messageText, attachments) => dispatch => {
        messagesAPI.send(dialogId, messageText, attachments);
    },
    setIsLoading: bool => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: bool
    }),
    removeMessageId: (messageId) => dispatch => {
        messagesAPI.removeMessage(messageId).then(({ data }) => {
            dispatch({
                type: 'MESSAGES:REMOVE_MESSAGE',
                payload: messageId
            });
        })
        .catch(() => {
            dispatch(actions.setIsLoading(false));
        })
    },
    fetchMessages: (dialogId) => dispatch => {
        dispatch(actions.setIsLoading(true));
        messagesAPI.getMessagesDialog(dialogId).then(({ data }) => {
            dispatch(actions.setMessages(data));
        })
        .catch(() => {
            dispatch(actions.setIsLoading(false));
        })
    }
};

export default actions;