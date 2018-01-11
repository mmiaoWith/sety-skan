// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/security-scan-project$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("src/layouts/default")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    app_select_template = marko_loadTemplate(require.resolve("../../components/app-select")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_select_tag = marko_loadTag(app_select_template),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: default_template,
      styles: {
          renderBody: function renderBody(out) {
            out.w("<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" media=\"all\" rel=\"stylesheet\"><link href=\"/static/bundle.css\" media=\"all\" rel=\"stylesheet\">");
          }
        },
      scripts: {
          renderBody: function renderBody(out) {
            out.w("<script src=\"https://maps.googleapis.com/maps/api/js\"></script><script src=\"/static/bundle.js\"></script>");
          }
        },
      title: {
          renderBody: function renderBody(out) {
            out.w("Select Page");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            app_select_tag({}, out, __component, "9");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/security-scan-project$1.0.0/src/pages/home/template.marko",
    tags: [
      "src/layouts/default",
      "../../components/app-select",
      "marko/src/taglibs/core/include-tag"
    ]
  };
