/// <reference path="../typings.d.ts" />

System.config({
  map: {
    "text": "vendor/js/text.js",
    "json": "vendor/js/json.js",
  },
  // baseURL: "/",
  packages: {
    "module": {
      defaultExtension: "js",
      format: "register",
    },
  },
});
