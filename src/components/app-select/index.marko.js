// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/security-scan-project$1.0.0/src/components/app-select/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h4>Please specify your QA team:</h4><form id=\"input\"><table class=\"input_class\"><tr><td><label><input type=\"radio\" name=\"team\" value=\"bolt\"" +
    marko_attr("checked", state.site === "bolt") +
    marko_attr("data-marko", {
      onclick: __component.d("handleSiteChange")
    }, false) +
    ">BOLT</label></td></tr><tr><td><label><input type=\"radio\" name=\"team\" value=\"kijiji\"" +
    marko_attr("checked", state.site === "kijiji") +
    marko_attr("data-marko", {
      onclick: __component.d("handleSiteChange")
    }, false) +
    ">kijiji IT</label></td></tr><tr><td><label><input type=\"radio\" name=\"team\" value=\"gumtree\"" +
    marko_attr("checked", state.site === "gumtree") +
    marko_attr("data-marko", {
      onclick: __component.d("handleSiteChange")
    }, false) +
    ">Gumtree AU</label></td></tr><tr><td><button type=\"submit\"" +
    marko_attr("data-marko", {
      onclick: __component.d("getData")
    }, false) +
    "> submit </button></td></tr></table></form>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/security-scan-project$1.0.0/src/components/app-select/index.marko",
    component: "./"
  };
