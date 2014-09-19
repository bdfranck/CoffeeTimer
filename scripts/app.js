define(function (require){
  var ko = require("vendor/knockout-3.2.0");
  var model = require("model");
  var viewModel = require("viewModel");

  ko.applyBindings(new viewModel());
});