var express = require('express');
var browserify = require('browserify-middleware');
var retrieveMergeConflictFor = require('./retrieve-conflict');

var app = express();

app.get('/merge-conflicts', function (req, res) {
  console.log('request', req.query);
  retrieveMergeConflictFor(req.query.url, req.query.branch).then(function(commit) {
    if (commit) {
      console.log('conflict found: [', commit.sha(), 'on', commit.date(), ']');
      res.json({ conflict: { sha: commit.sha(), date: commit.date() } });
    } else {
      res.json({});
    }
  }).catch(function(err) {
    console.error(err);
    res.status(500).json({error: {stack: err.stack, message: err.message}});
  });
});

app.use('/js', browserify(__dirname + '/clientjs'));
app.use('/js/vendor', express.static('node_modules/handlebars/dist/'));
app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('app listening on port ' + server.address().port + '!');
});
