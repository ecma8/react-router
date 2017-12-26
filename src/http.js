import axios from 'axios'
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://open.ecma8.com';
axios.interceptors.request.use(config => {
    let loading=document.getElementById('loading');
    loading.style.display='block';
    return config
}, error => {
    let loading=document.getElementById('loading');
    loading.style.display='none';
    return Promise.reject(error)
});

axios.interceptors.response.use(data => {
    let loading=document.getElementById('loading');
    loading.style.display='none';
    if(data.data.msg === "失败"){

    }
    return data.data
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // router.replace({
                //     path: '/login'
                // })
        }
    }
    return Promise.reject(error)
});
export default axios