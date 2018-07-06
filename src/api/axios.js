var axios = require('axios');

var axiosInstance = axios.create({
    // baseURL: 'http://azizpc.codepanda.web.id',
    baseURL: 'https://yourganic.codepanda.web.id',
    /* other custom settings */
});

module.exports = axiosInstance;