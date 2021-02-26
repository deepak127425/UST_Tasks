var appInsights = require('applicationinsights');
var express = require('express');
var createError = require('http-errors');
var process = require('process');

let logger = require('./utils/logging');
let util = require('./utils/utils');

var pingRouter = require('./routes/ping');
//..............................

var postRouter = require('./routes/patient');
const mongocon = require('./utils/mongoConnection');

mongocon.getMongoConnection();

//..............................
var error = require('./routes/error/error');

var app = express();
var txnId = util.generateTxnID();
var cfgmgr;
if (process.argv.length > 4) {
  cfgmgr = require('./utils/ConfigManager');
  invokeApp(cfgmgr);
} else {
  cfgmgr = require('./utils/CloudConfigManager');
  var eventEmitter = cfgmgr.eventEmitter;
  cfgmgr.getConfigData().then((data) => {
    invokeApp(data);
  }).catch((err) => {
    logger.logError(null, null, txnId, 1, "END", "NA", "NA", "", null, "SVC-ERR-001", "Service error", err);
    util.exitApp()
  });
}

if (eventEmitter) {
  eventEmitter.on('refreshedConfig', function (data) {
    setAppLocals(data);
  });
}

function setAppLocals(configManagerObj) {
  app.locals.version = configManagerObj.log.revision;
  app.locals.serviceName = configManagerObj.log.microservice;
}

function invokeApp(configManagerObj) {
  const port = configManagerObj.server.port;
  const appinsightsConfig = configManagerObj.appinsights;
  if (appinsightsConfig.appinsightsneeded === 'Y') {
    appInsights
      .setup(appinsightsConfig.key)
      .setSendLiveMetrics(true)
      .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
      .start();
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  setAppLocals(configManagerObj);
  app.use('/api/v1/walgreens/nodejs/boilerplate/ping', pingRouter);
  app.use('/v1',postRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    var responseString = error.getError(error.HttpStatusCodes.INVALIDVERB);
    res.status(error.HttpStatusCodes.INVALIDVERB);
    res.set('Content-Type', 'application/json');
    res.send(responseString);
  });

  app.listen(port, function () {
    logger.logInfo(null, null, txnId, 3, "START", "NA", "NA", `Ping service running on port:${port}`, null, "SVC-LOG-001", "Service log");
    console.log('server started');
  });

}

module.exports = app;
