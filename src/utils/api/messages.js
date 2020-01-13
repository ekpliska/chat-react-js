import { axios } from '../../core';

export default {
    getMessagesDialog: (dialogId) => axios.get(`/messages?dialog=${dialogId}`)
}