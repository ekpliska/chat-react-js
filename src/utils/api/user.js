import { axios } from '../../core';

export default {
    singIn: (postData) => axios.post('/user/sing-in', postData),
    myProfile: () => axios.get('/user/profile')
}