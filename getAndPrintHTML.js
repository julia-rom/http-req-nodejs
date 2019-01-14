var https = require('https');

function getAndPrintHTML(options) {

    // var requestOptions = {
    //     host: 'sytantris.github.io',
    //     path: '/http-examples/step2.html'
    // };

    https.get(options, function (response, body) {

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

getAndPrintHTML(requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
})