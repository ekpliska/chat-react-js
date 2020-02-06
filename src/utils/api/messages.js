import { axios } from '../../core';

export default {
    getMessagesDialog: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
    send: (dialogId, messageText) => axios.post('/messages', {
        dialog_id: dialogId,
        text: messageText
    })
}