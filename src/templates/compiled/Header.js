define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"header-view\">\n    <div class=\"row collapse\">\n        <div id=\"twitter-link-container\" class=\"small-5 columns\">\n            <img id=\"twitter-icon\" xlink:href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.twitterIconSvgSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.twitterIconSvgSrc, options)))
    + "\" src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.twitterIconSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.twitterIconSrc, options)))
    + "\" alt=\"";
  if (stack2 = helpers.twitterIconAlt) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.twitterIconAlt; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" />&#160;&#160;<a id=\"twitter-post-button\" href=\"#\">";
  if (stack2 = helpers.twitterPostButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.twitterPostButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>&#160;&#160;&#124;&#160;&#160;<a id=\"twitter-follow-us-button\" href=\"#\">";
  if (stack2 = helpers.twitterFollowUsButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.twitterFollowUsButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        </div>\n        <div id=\"facebook-link-container\" class=\"small-5 columns\">\n            <img id=\"facebook-icon\" xlink:href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.facebookIconSvgSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.facebookIconSvgSrc, options)))
    + "\" src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getAppUri || depth0.getAppUri),stack1 ? stack1.call(depth0, depth0.facebookIconSrc, options) : helperMissing.call(depth0, "getAppUri", depth0.facebookIconSrc, options)))
    + "\" alt=\"";
  if (stack2 = helpers.facebookIconAlt) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.facebookIconAlt; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" />&#160;&#160;<a id=\"facebook-post-button\" href=\"#\">";
  if (stack2 = helpers.facebookPostButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.facebookPostButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>&#160;&#160;&#124;&#160;&#160;<a id=\"facebook-follow-us-button\" href=\"#\">";
  if (stack2 = helpers.facebookFollowUsButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.facebookFollowUsButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        </div>\n        <div class=\"small-2 columns\">\n            <div id=\"show-outage-map-view-button-container\" class=\"hidden\">\n                <a id=\"show-outage-map-view-button\" href=\"#\">";
  if (stack2 = helpers.showOutageMapViewButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.showOutageMapViewButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n            </div>\n            <div id=\"show-outage-report-view-button-container\">\n                <a id=\"show-outage-report-view-button\" href=\"#\">";
  if (stack2 = helpers.showOutageReportViewButtonText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.showOutageReportViewButtonText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

return this["Handlebars"]["templates"];

});