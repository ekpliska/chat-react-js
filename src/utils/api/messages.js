import { axios } from '../../core';

export default {
    getMessagesDialog: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
    removeMessage: (messageId) => axios.delete(`/messages/${messageId}`),
    send: (dialogId, messageText, attachments) => axios.post('/messages', {
        dialog_id: dialogId,
        text: messageText,
        attachments: attachments
    })
}