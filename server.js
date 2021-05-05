const Hapi = require('hapi');
const Joi = require('joi');

const JoiSchema= require('./JoiSchema.js');
const controller=require('./controller.js')
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes:{
    cors:{
      origin:['*']
    }
  }
});

const start = async () => {
  await server.start();
};

//route handlers
server.route({
  method: 'POST',
  path: '/addOrUpdateUser',
  handler: async function (request, h) {
      try{var response;
      try{
        Joi.assert(request.payload,JoiSchema.schema);
      }catch(error){
        return 'invalid parameters, enter again';
      }
      response =await controller.addOrUpdateUsers(request.payload);
      return response;
    }catch(error){return (error);}
   }
});
server.route({
    path: '/findUser',
    method: 'POST',
    handler: async (request, h) => { 
      try{
      const payload = request.payload;
      const response =await controller.fetchUser(payload.email2);
      return response;
      }catch(error){return (error);}
    
    }
});
server.route({
  path: '/deleteUser',
  method: 'PUT',
  handler: async (request, h) => { 
    try{
    const payload = request.payload;
    const response =await controller.deleteUsers(payload.email3);
    return response;
    }catch(error){return (error);}
  
  }
});
server.route({
  path: '/getAllUsers',
  method: 'POST',
  handler: async (request, h) => { 
    try{
    const response =await controller.getAllUsers();
    return response;
    }catch(error){return (error);}
  
  }
});
start();
