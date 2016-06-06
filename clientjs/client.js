var moment = require('moment');
var fetch = require('isomorphic-fetch');

var form = document.repoDetails;
form.onsubmit = function(event) {
  event.preventDefault();
  var url = '/merge-conflicts?url=' + encodeURIComponent(form.elements.url.value) +
    '&branch=' + encodeURIComponent(form.elements.branch.value);
  fetch(url).then(function(res) {
    res.json().then(function(data) {
      if (data.error) {
        console.error(new Error(data.error.message));
        document.getElementById('output').innerText = data.error.message;
      } else if (data.conflict) {
        var numDays = moment().diff(data.conflict.date, 'days');
        var dayCountClass;
        if (numDays < 7) {
          dayCountClass = 'text-danger';
        } else if (numDays < 30) {
          dayCountClass = 'text-warning';
        } else {
          dayCountClass = 'text-success';
        }
        document.getElementById('output').innerHTML = Handlebars.templates.conflictFound({
          numDays: numDays,
          dayCountClass: dayCountClass
        });
      } else {
        document.getElementById('output').innerText = 'No conflicts found. Congratulations!';
      }
    });
  });
};
