!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.conflictFound=n({compiler:[7,">= 4.0.0"],main:function(n,a,l,s,e){var t,c=null!=a?a:{},i=l.helperMissing,o="function",d=n.escapeExpression;return'<div class="row">\n  <div class="col-lg-8 col-lg-offset-1">\n    <div class="conflict-notice text-center lead">\n      <div class="conflict-notice-headline">It\'s been</div>\n      <div class="conflict-notice-body"><span class="day-count '+d((t=null!=(t=l.dayCountClass||(null!=a?a.dayCountClass:a))?t:i,typeof t===o?t.call(c,{name:"dayCountClass",hash:{},data:e}):t))+'">'+d((t=null!=(t=l.numDays||(null!=a?a.numDays:a))?t:i,typeof t===o?t.call(c,{name:"numDays",hash:{},data:e}):t))+'</span> days</div>\n      <div class="conflict-notice-footer">since the last merge conflict</div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();