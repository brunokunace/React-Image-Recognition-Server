const express = require('express')
const app = express()
const FormData = require('form-data');

const imagerecognition = require('./services/imageRecognition')

app.post('/imagerecognition', (req, res) => {
    console.log(req)
    imagerecognition()
        .then(res =>  res.json({message: 'then'}))
        .catch(() => res.json({ message: 'catch' }))
})



const port = 3001;
app.listen(port, () => {
    console.log(`Server listening port ${port}`)
})