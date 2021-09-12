var common = require('./common.js');
var extension = require('./HomePage.extension.js')

exports.transform = function (model) {
    if (extension && extension.preTransform) {
        model = extension.preTransform(model);
      }
    
      common.setupContribution(model);
      common.setYear(model);

      if (extension && extension.postTransform) {
        model = extension.postTransform(model);
      }

    return model;
}