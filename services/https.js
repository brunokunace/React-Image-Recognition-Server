const axios = require('axios')

const https = axios.create({
    baseURL: "https://gateway.watsonplatform.net/visual-recognition/api",
    auth: {
      username: "apikey",
      password: "9VYToMRxttPhN3q-s4uBga-Gg92OVH2Ocl9RwB_p-B_W"
    },
  });
  
  module.exports = https