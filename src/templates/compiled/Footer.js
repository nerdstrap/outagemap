define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"footer-view\">\n    <div class=\"row collapse\">\n        <div class=\"small-6 large-6 columns\">\n            <img id=\"logo-icon\" xlink:href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.logoImageSvgSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.logoImageSvgSrc, options)))
    + "\" src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.logoImageSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.logoImageSrc, options)))
    + "\" alt=\"";
  if (stack2 = helpers.logoImageAlt) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.logoImageAlt; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" />\n        </div>\n        <div class=\"small-6 large-6 columns\">\n            <div id=\"outage-map-legend-view\"></div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

return this["Handlebars"]["templates"];

});