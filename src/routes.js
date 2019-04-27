const api = require('./api');

const routes = [
  {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return {success: true};
    }
  },
  {
    method: 'POST',
    path: '/api/register',
    options: api.user.register
  },
  {
    method: 'GET',
    path: '/api/confirmation',
    options: api.user.confirmation
  },
  {
    method: 'POST',
    path: '/api/login',
    options: api.user.login
  },
  {
    method: 'GET',
    path: '/api/rooms',
    options: api.room.all
  },
  {
    method: 'POST',
    path: '/api/rooms',
    options: api.room.create
  },
  {
    method: 'DELETE',
    path: '/api/rooms/{id}',
    options: api.room.remove
  }
];

module.exports = routes;