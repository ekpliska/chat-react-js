import { axios } from '../../core';

export default {
    singIn: (postData) => axios.get('/user/sing-in', postData)
}