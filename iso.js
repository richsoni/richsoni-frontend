jsdom = require('jsdom').jsdom
var document = jsdom("hello world")
var window = document.defaultView
global.navigator = global.window.navigator
require('babel-core/register')
x=require('./src/entry.js')
