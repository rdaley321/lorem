var express = require('express')
var app = express()
var loremIpsum = require('lorem-ipsum')

app.get('/lorem', function (req, res) {
  var output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    paragraphLowerBound: 10,
    paragraphUpperBound: 20,
    format: 'html'
  })
  res.send(output);
});

app.get('/lorem/:num', function (req, res) {
  var num = parseInt(req.params.num)
  var output = loremIpsum({
    count: num,
    units: 'paragraphs',
    paragraphLowerBound: 10,
    paragraphUpperBound: 20,
    format: 'html'
  })
  res.send(output);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
