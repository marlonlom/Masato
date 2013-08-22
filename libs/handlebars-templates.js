(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['hbt-home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"menu-li home-menu-item\">\n                <a href=\"#\" data-home-link=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"categ-link\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </li>\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\n    <h5 class=\"title\">INDICADORES</h5>\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\n</header>\n<div id=\"wrapper\">\n    <div id=\"scroller\">\n        <ul class='home-list'>\n            <li class=\"menu-li home-li-tip search-box\">\n                <div class=\"search-box-wrapper\">\n                    <input type=\"text\" id=\"search-text\" name=\"search-text\" placeholder=\"Buscar un indicador\">\n                    <button id=\"search-btn\">&nbsp;</button>\n                </div>\n            </li>\n            ";
  stack1 = helpers.each.call(depth0, depth0.menu, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n</div>\n<footer id=\"footer\">\n    <div class=\"footer-container\"></div>\n</footer>";
  return buffer;
  });
templates['hbt-indiqs-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"menu-li item-li\">\n                <a href=\"#\" class=\"itm-nom\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n                <img src=\"img/map.png\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"vmap-icon\" />\n            </li>\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\n    <h5 class=\"title\">INDICADORES</h5>\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\n</header>\n<div id=\"wrapper\">\n    <div id=\"scroller\">\n        <input type=\"hidden\" id=\"prev-page\" name=\"prev-page\" value=\"home\">\n        <ul class='deptos-list'>\n            <li class=\"menu-li home-li-tip\">\n                <span>Categor&iacute;a:&nbsp;";
  if (stack1 = helpers.categoryName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.categoryName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n</div>\n<footer id=\"footer\">\n    <div class=\"footer-container\">\n        <div class=\"footer-btn back-prev-icon\">\n            <img src=\"img/icon-back.png\">\n            Anterior\n        </div>\n    </div>\n</footer>";
  return buffer;
  });
templates['hbt-mapping'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header id=\"header\">\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\n    <h5 class=\"title\">INDICADORES</h5>\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\n</header>\n<div id=\"wrapper\">\n    <div class=\"map-title\">\n        <span>";
  if (stack1 = helpers.indicatorTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.indicatorTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <img class=\"map-legend-img\">\n    <div class=\"layer-selectorbox\">\n        <select name=\"maplayerSelect\" id=\"maplayerSelect\"></select>\n    <img id=\"map-loading-img\" src=\"img/icon-loading.gif\">\n    </div>\n    <div id=\"map-canvas\" style=\"width: 100%; height: 90%;\"></div>\n</div>\n<footer id=\"footer\">\n    <div class=\"footer-container\">\n        <div class=\"footer-btn back-home-icon\">\n            <img src=\"img/icon-home.png\">\n            Inicio\n        </div>\n        <div class=\"footer-btn show-legend-icon\">\n            <img src=\"img/icon-legend.png\">\n            Leyenda\n        </div>\n        <div class=\"footer-btn save-mapdata-icon\">\n            <img src=\"img/icon-download.png\">\n            Descarga\n        </div>\n    </div>\n</footer>";
  return buffer;
  });
templates['hbt-search-results'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"menu-li item-li search-li\">\n                <a href=\"#\" class=\"itm-nom\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n                <img src=\"img/map.png\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"vmap-icon\" />\n            </li>\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\n    <h5 class=\"title\">INDICADORES</h5>\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\n</header>\n<div id=\"wrapper\">\n    <div id=\"scroller\">\n        <input type=\"hidden\" id=\"prev-page\" name=\"prev-page\" value=\"home\">\n        <ul class='home-list'>\n            <li class=\"menu-li home-li-tip\">\n                <b>";
  if (stack1 = helpers.upperTip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.upperTip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\n            </li>\n            ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n</div>\n<footer id=\"footer\">\n    <div class=\"footer-container\">\n        <div class=\"footer-btn back-home-icon\">\n            <img src=\"img/icon-home.png\">\n            Inicio\n        </div>\n        <div class=\"footer-btn back-prev-icon\">\n            <img src=\"img/icon-back.png\">\n            Anterior\n        </div>\n    </div>\n</footer>";
  return buffer;
  });
})();