var https = require('https');

function getAndPrintHTML() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    https.get(requestOptions, function (response, body) {

        response.setEncoding('utf8');


        response.on('data', function (data) {
            var dataText = [];
            dataText.push(data);
            console.log(data);
        });

        response.on('end', function () {
            console.log('Response stream complete.');
        });


    });
}

getAndPrintHTML()