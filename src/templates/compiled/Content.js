define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-view\">\n    <div class=\"row collapse\">\n        <div id=\"outage-map-view\" class=\"small-12 columns\"></div>\n    </div>\n    <div class=\"row collapse\">\n        <div id=\"outage-report-view\" class=\"small-12 columns hidden\"></div>\n    </div>\n</div>";
  });

return this["Handlebars"]["templates"];

});