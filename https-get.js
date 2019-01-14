// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

function getAndPrintHTMLChunks() {
    // var https = require('https');

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function (response) {

        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
        });

        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function () {
            console.log('Response stream complete.');
        });

    })
}

getAndPrintHTMLChunks()