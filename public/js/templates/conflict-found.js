(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['conflictFound'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n  It's been "
    + container.escapeExpression(((helper = (helper = helpers.numDays || (depth0 != null ? depth0.numDays : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"numDays","hash":{},"data":data}) : helper)))
    + " days since the last merge conflict.\n</div>";
},"useData":true});
})();