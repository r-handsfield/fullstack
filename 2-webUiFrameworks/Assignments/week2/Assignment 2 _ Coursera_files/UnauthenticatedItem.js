"use strict";define("bundles/unauthenticated/components/UnauthenticatedItem",["require","exports","module","react-with-addons","bundles/phoenix/template/models/userAuthorization","i18n!nls/unauthenticated","css!./__styles__/UnauthenticatedItem"],function(require,exports,module){var e=require("react-with-addons"),n=require("bundles/phoenix/template/models/userAuthorization"),t=require("i18n!nls/unauthenticated");require("css!./__styles__/UnauthenticatedItem");var a=e.createClass({displayName:"UnauthenticatedItem",onLogInButtonClick:function onLogInButtonClick(){n.ensureAuthenticated({mode:"login"})},componentDidMount:function componentDidMount(){this.onLogInButtonClick()},render:function render(){return e.createElement("div",{className:"c-open-single-page c-unauthenticated rc-UnauthenticatedItem"},e.createElement("div",{className:"bt3-row title-row"},e.createElement("div",{className:"bt3-col-md-12"},e.createElement("h2",{className:"headline-4-text"},t("Please log in to view this content.")))),e.createElement("div",{className:"bt3-row c-open-single-page-start-area"},e.createElement("div",{className:"bt3-col-md-4"},e.createElement("button",{className:"primary bt3-btn-block c-call-to-action-btn",onClick:this.onLogInButtonClick},t("Log In")))))}});module.exports=a});