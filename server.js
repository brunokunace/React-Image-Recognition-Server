const proxy = require('express-http-proxy');
const app = require('express')();

app.use('/proxy', proxy('gateway.watsonplatform.net', {
    https: true
  }));

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening port ${port}`)
})