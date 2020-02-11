import { axios } from '../../core';

export default {
    upload: (files) => {
        const formData = new FormData();
        formData.append('file', files);
        return axios.post('/files', {
            headrs: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}