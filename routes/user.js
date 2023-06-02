const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controllers/user');
const {LOGIN, PROFILE, DELETE} = require('../utils/constants/app_constants').ROUTES.USER;
userRoutes.post(LOGIN, userCtrl.login);
userRoutes.get(PROFILE, userCtrl.profile);
userRoutes.get(DELETE, userCtrl.deleteProfile);
module.exports = userRoutes;
