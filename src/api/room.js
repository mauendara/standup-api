const { Room } = require('../models');
const Boom = require('boom');

const roomApi = {
  all: {
    auth: false,
    async handler(request, h) {
      try {
        return await Room.find({}).sort({ createdAt: 'desc' });
      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
  create: {
    // auth: 'jwt',
    async handler(request, h) {
      try {
        const room = await new Room({
          name: request.payload.name
        });
        room.save();
        return { message: "Room created successfully!", task };
      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
  remove: {
    // auth: 'jwt',
    async handler(request, h) {
      try {
        await Room.findById(request.params.room.id).remove();
        return { success: true, message: 'Successfully removed room!' };
      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  }
};

module.exports = roomApi;