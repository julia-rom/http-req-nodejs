var https = require('https');

function getHTML(options, callback) {

    https.get(options, function (response, body) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            var dataText = [];
            dataText.push(data);
            callback(data);
        });
        response.on('end', function () {
            console.log('Response stream complete.');
        });
    });
}

function printHTML(html) {
    console.log(html);
}


// getHTML(requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step2.html'
// })

module.exports = getHTML