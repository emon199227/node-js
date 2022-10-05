
const express = require('express');
const route =express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root route
 * @method Get /
 */
//all user show
route.get('/',services.homeRoute);
//add user file show
route.get('/add-user',services.add_user);
//update user file show 

route.get('/update-user',services.update_user);

//create ApI
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;