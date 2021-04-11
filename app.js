var express = require('express');
var path = require('path');
const rendertron = require('rendertron-middleware');
var app = express();

const bots = [
  'baiduspider',
  'bingbot',
  'embedly',
  'facebookexternalhit',
  'linkedinbot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'slackbot',
  'twitterbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
];


app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render',
  userAgentPattern: new RegExp(bots.join('|'), 'i')
}));

app.use(express.static(path.join(__dirname, 'dist/rendertronTest')));
app.use('*', express.static(path.join(__dirname, 'dist/rendertronTest')));

module.exports = app;
