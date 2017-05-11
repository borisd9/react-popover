"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isServer = function isServer() {
  return typeof window === "undefined";
};
var isClient = function isClient() {
  return !isServer();
};

var getWindow = isClient() ? window : null;
var getDocument = isClient() ? document : null;

exports.default = {
  isServer: isServer,
  isClient: isClient,
  getWindow: getWindow,
  getDocument: getDocument
};
exports.isServer = isServer;
exports.isClient = isClient;
exports.getWindow = getWindow;
exports.getDocument = getDocument;