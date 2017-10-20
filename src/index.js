'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined;

//NASA API KEY
var API_KEY = "xs3eBxUVVkJTJKNGjlevmUlBHr8gpHmtH9NUlmGI"

var SKILL_NAME = "New Skill";
var HELLO_WORLD = "Hello World!";
var HELP_MESSAGE = "You can say talk to me, say something, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

exports.handler = function (event, context, callback) {
    alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },
    'MyIntent': function () {
        this.emit(':tellWithCard', HELLO_WORLD, SKILL_NAME, HELP_MESSAGE );
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', HELP_MESSAGE, HELP_REPROMPT);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};