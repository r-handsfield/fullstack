"use strict";define("bundles/ondemand/components/LoadingIndicator",["require","exports","module","react-with-addons","i18n!nls/ondemand","css!./__styles__/LoadingIndicator"],function(require,exports,module){var n=require("react-with-addons"),e=require("i18n!nls/ondemand");require("css!./__styles__/LoadingIndicator");var a=n.createClass({displayName:"LoadingIndicator",render:function render(){return n.createElement("div",{className:"rc-LoadingIndicator"},e("Loading"))}});module.exports=a});