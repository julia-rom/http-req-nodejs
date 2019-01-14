var https = require('https');

function getAndPrintHTML() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    https.get(requestOptions, function (response, body) {

        response.setEncoding('utf8');


        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
            console.log(data);
        });

        response.on('end', function () {
            console.log('Response stream complete.');
        });


    });
}

getAndPrintHTML()