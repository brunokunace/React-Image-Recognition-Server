const https = require('./https')

const imagerecognition = (images_file) => {
    console.log(images_file)
    return https.post('/v3/detect_faces?version=2018-03-19', images_file)
}

module.exports = imagerecognition
