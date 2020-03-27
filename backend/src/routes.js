const express = require('express');

const validation = require('./middlewares/validation');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', validation.logon, SessionController.create);

routes.get('/profile', validation.profileList, ProfileController.index);

routes.get('/incidents', validation.incidentsList, IncidentController.index);
routes.post('/incidents', validation.incidentsCreate, IncidentController.create);
routes.delete('/incidents/:id', validation.incidentsDelete, IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validation.ongsCreate, OngController.create);

module.exports = routes;
