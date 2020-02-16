import { axios } from '../../core';

export default {
    getMessagesDialog: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
    removeMessage: (messageId) => axios.delete(`/messages/${messageId}`),
    send: (messageText, dialogId, attachments) => axios.post('/messages', {
        text: messageText,
        dialog_id: dialogId,
        attachments: attachments
    })
}