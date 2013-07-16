(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['hbt-home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li class=\"menu-li home-menu-item\">\r\n                <a href=\"#\" data-home-link=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"categ-link\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n            </li>\r\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\r\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\r\n    <h5 class=\"title\">INDICADORES</h5>\r\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\r\n</header>\r\n<div id=\"wrapper\">\r\n    <div id=\"scroller\">\r\n        <ul class='home-list'>\r\n            <li class=\"menu-li home-li-tip search-box\">\r\n                <div class=\"search-box-wrapper\">\r\n                    <input type=\"text\" id=\"search-text\" name=\"search-text\" placeholder=\"Buscar un indicador\">\r\n                    <button id=\"search-btn\">&nbsp;</button>\r\n                </div>\r\n            </li>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0.menu, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    </div>\r\n</div>\r\n<footer id=\"footer\">\r\n    <div class=\"footer-container\"></div>\r\n</footer>";
  return buffer;
  });
templates['hbt-indiqs-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li class=\"menu-li item-li\">\r\n                <a href=\"#\" class=\"itm-nom\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                <img src=\"img/map.png\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"vmap-icon\" />\r\n            </li>\r\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\r\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\r\n    <h5 class=\"title\">INDICADORES</h5>\r\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\r\n</header>\r\n<div id=\"wrapper\">\r\n    <div id=\"scroller\">\r\n        <input type=\"hidden\" id=\"prev-page\" name=\"prev-page\" value=\"home\">\r\n        <ul class='deptos-list'>\r\n            <li class=\"menu-li home-li-tip\">\r\n                <span>Categor&iacute;a:&nbsp;";
  if (stack1 = helpers.categoryName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.categoryName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n            </li>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    </div>\r\n</div>\r\n<footer id=\"footer\">\r\n    <div class=\"footer-container\">\r\n        <div class=\"footer-btn back-home-icon\">\r\n            <img src=\"img/icon-home.png\">\r\n            Inicio\r\n        </div>\r\n        <div class=\"footer-btn back-prev-icon\">\r\n            <img src=\"img/icon-back.png\">\r\n            Anterior\r\n        </div>\r\n    </div>\r\n</footer>";
  return buffer;
  });
templates['hbt-mapping'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header id=\"header\">\r\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\r\n    <h5 class=\"title\">INDICADORES</h5>\r\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\r\n</header>\r\n<div id=\"wrapper\">\r\n    <div class=\"map-title\">\r\n        <span>";
  if (stack1 = helpers.indicatorTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.indicatorTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    </div>\r\n    <img class=\"map-legend-img\">\r\n    <div class=\"map-layers-box\">\r\n        <div class=\"layers-titlebox\">\r\n            <b>Capas</b>\r\n            <a class=\"btn-close-layers-box\" href=\"#\">X</a>\r\n        </div>\r\n        <div class=\"layers-list-wrapper\">\r\n        </div>\r\n    </div>\r\n    <div id=\"map-canvas\" style=\"width: 100%; height: 90%;\"></div>\r\n</div>\r\n<footer id=\"footer\">\r\n    <div class=\"footer-container\">\r\n        <div class=\"footer-btn back-home-icon\">\r\n            <img src=\"img/icon-home.png\">\r\n            Inicio\r\n        </div>\r\n        <div class=\"footer-btn show-layers-icon\">\r\n            <img src=\"img/icon-layers.png\">\r\n            Capas\r\n        </div>\r\n        <div class=\"footer-btn show-legend-icon\">\r\n            <img src=\"img/icon-legend.png\">\r\n            Leyenda\r\n        </div>\r\n        <div class=\"footer-btn save-mapdata-icon\">\r\n            <img src=\"img/icon-download.png\">\r\n            Descarga\r\n        </div>\r\n    </div>\r\n</footer>";
  return buffer;
  });
templates['hbt-search-results'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li class=\"menu-li item-li search-li\">\r\n                <a href=\"#\" class=\"itm-nom\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.nom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                <img src=\"img/map.png\" data-itm-cod=\"";
  if (stack1 = helpers.cod) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cod; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"vmap-icon\" />\r\n            </li>\r\n            ";
  return buffer;
  }

  buffer += "<header id=\"header\">\r\n    <img src=\"img/dane.header.01.png\" class=\"danelogo1\">\r\n    <h5 class=\"title\">INDICADORES</h5>\r\n    <img src=\"img/dane.header.02.png\" class=\"danelogo2\">\r\n</header>\r\n<div id=\"wrapper\">\r\n    <div id=\"scroller\">\r\n        <input type=\"hidden\" id=\"prev-page\" name=\"prev-page\" value=\"home\">\r\n        <ul class='home-list'>\r\n            <li class=\"menu-li home-li-tip\">\r\n                <b>";
  if (stack1 = helpers.upperTip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.upperTip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\r\n            </li>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    </div>\r\n</div>\r\n<footer id=\"footer\">\r\n    <div class=\"footer-container\">\r\n        <div class=\"footer-btn back-home-icon\">\r\n            <img src=\"img/icon-home.png\">\r\n            Inicio\r\n        </div>\r\n        <div class=\"footer-btn back-prev-icon\">\r\n            <img src=\"img/icon-back.png\">\r\n            Anterior\r\n        </div>\r\n    </div>\r\n</footer>";
  return buffer;
  });
})();