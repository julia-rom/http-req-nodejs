var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

function printReverse(html) {
    var splitString = html.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}

getHTML(requestOptions, printReverse);