import { axios } from '../../core';

export default {
    upload: (file) => {
        console.log('file', file);
        
        const formData = new FormData();
        formData.append('file', file);
        return axios.post('/files', formData, {
            headrs: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}