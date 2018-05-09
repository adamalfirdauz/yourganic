var axios = require('axios');

var axiosInstance = axios.create({
    // baseURL: 'http://azizpc.codepanda.web.id',
    baseURL: 'http://yourganic.codepanda.web.id',
    /* other custom settings */
});

module.exports = axiosInstance;