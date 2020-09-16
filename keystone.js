require('dotenv').config();
const express = require('express'),
app = express(),
body = require('body-parser'),
keystone = require('keystone');

app.use(body.json());

app.use(body.urlencoded({
    parameterLimit: 100000,
    limit: '500mb',
    extended: true
  }));

//app.use(body({limit: '500mb'}));
keystone.init({
  'name': 'backend-test',
  'session': true,
  'user model': 'User',
  'auto update': true,
  'auth': true,
});

keystone.set('cloudinary config', {
	cloud_name: 'dhaftf60i',
	api_key: '717448534233659',
	api_secret: 'uOiQ0mYVihexJv2GsKq81m6vEgc',
});

keystone.set('cloudinary config', {
	cloud_name: 'dhaftf60i',
	api_key: '717448534233659',
	api_secret: 'uOiQ0mYVihexJv2GsKq81m6vEgc',
});


keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

keystone.set('cors allow origin', true);
keystone.set('cors allow headers', 'Access-Control-Allow-Origin, Content-Type, Authorization');

keystone.set('nav', {
	users: 'users'
});

keystone.start();
