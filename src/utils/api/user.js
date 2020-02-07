import { axios } from '../../core';

export default {
    singIn: (postData) => axios.post('/user/sing-in', postData),
    singUp: (postData) => axios.post('/user/sing-up', postData),
    verify: (hash) => axios.get(`/user/verify?hash=${hash}`),
    myProfile: () => axios.get('/user/profile'),
    searchUser: (name) => axios.get(`/user/search?query=${name}`)
}