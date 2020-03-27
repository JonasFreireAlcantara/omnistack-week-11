const { celebrate, Segments, Joi } = require('celebrate');

const logon = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

const profileList = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

const incidentsList = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    page: Joi.number(),
  }),
});

const incidentsCreate = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
});

const incidentsDelete = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

const ongsCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
});

module.exports = {
  logon,
  profileList,
  incidentsList,
  incidentsCreate,
  incidentsDelete,
  ongsCreate,
};
