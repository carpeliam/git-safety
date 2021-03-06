# Git Safety

or, "It's been *n* days since the last merge conflict".

## Usage

### Within Node.js

```
npm install git-safety
```

```
var retrieveMergeConflictFor = require('git-safety');

retrieveMergeConflictFor('https://github.com/carpeliam/mergetest.git', 'master').then(function(commit) {
  if (commit) {
    console.log('conflict found: [', commit.sha(), 'on', commit.date(), ']');
  } else {
    console.log('no merge conflict detected');
  }
}).catch(console.log);
```

### As an Express Application

```
npm install
PORT=3456 npm start
```

An express app will run on port 3000 by default.
