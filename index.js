var moment = require('moment');
var retrieveMergeConflictFor = require('./retrieve-conflict');

var args = process.argv.slice(2);

retrieveMergeConflictFor(args[0], args[1]).then(function(commit) {
  if (commit) {
    var numDays = moment().diff(commit.date(), 'days');
    console.log('' + numDays, 'days [', commit.sha(), 'on', commit.date(), ']');
  } else {
    console.log('no merge conflict detected');
  }
}).catch(console.log);
