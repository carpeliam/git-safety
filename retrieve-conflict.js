var Git = require('nodegit');

module.exports = function retrieveMergeConflictFor(repositoryLocation, branch) {
  return new Promise(function(resolve, reject) {
    var repo;
    var hashedName = require('crypto').createHash('md5').update(repositoryLocation).digest('hex');
    var clonePath = require('path').join('.repos', hashedName);
    Git.Clone(repositoryLocation, clonePath, {
      fetchOpts: { callbacks: { certificateCheck: function() { return 1; } } }
    }).catch(function() {
      return Git.Repository.open(clonePath);
    }).then(function(repository) {
      repo = repository;
      return repo.fetch('origin').then(function() {
        return repo.getBranchCommit(branch && 'origin/' + branch || 'master');
      }).catch(reject);
    }).then(function(lastCommit) {
      var history = lastCommit.history();
      history.on('commit', function(commit) {
        if (commit.parentcount() > 1) {
          commit.getParents().then(function(commits) {
            return Git.Merge.commits(repo, commits[0], commits[1]);
          }).then(function(index) {
            if (index.hasConflicts()) {
              resolve(commit);
            }
          }).catch(reject);
        }
      });
      history.on('end', function() { resolve(); });
      history.on('error', reject);
      history.start();
    }).catch(reject);
  });
};
