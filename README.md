# Git Safety

or, "It's been *n* days since the last merge conflict".

## Usage

### Within Node.js

```
npm install git-safety
```

```
var retrieveMergeConflictFor = require('git-safety');
var args = process.argv.slice(2);

retrieveMergeConflictFor('https://github.com/carpeliam/mergetest.git', 'master').then(function(commit) {
  if (commit) {
    var numDays = moment().diff(commit.date(), 'days');
    console.log('conflict found: [', commit.sha(), 'on', commit.date(), ']');
  } else {
    console.log('no merge conflict detected');
  }
}).catch(console.log);
```

### As an Express Application

```
npm install
npm start
```

An express app will run on port 3000.
