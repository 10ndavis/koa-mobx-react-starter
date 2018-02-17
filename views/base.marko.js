// Compiled using marko@4.7.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/koa-mobx-react-starter$1.0.0/views/base.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_str = marko_helpers.s,
    marko_escapeScript = marko_helpers.xs,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>" +
    marko_escapeXml(data.title) +
    "</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\"><meta name=\"description\" content=\"" +
    marko_escapeXmlAttr(data.description) +
    "\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-16x16.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json\"><meta name=\"application-name\" content=\"Vibescout\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/styles.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"root\">" +
    marko_str(data.html) +
    "</div><script type=\"text/javascript\">window.__INITIAL_STATE__ = JSON.stringify(" +
    marko_escapeScript(data.initialState) +
    ");</script><script src=\"/dist/bundle.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "16");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/koa-mobx-react-starter$1.0.0/views/base.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
