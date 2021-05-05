const Hapi = require('hapi');
const fs = require('fs');
const { Client } = require('elasticsearch');
const { report } = require('process');
const client = new Client({ node: 'http://localhost:9200' });
const id=0;
//asyn function to fetch user data
const fetchUser = async (email) => {
  var response={};

    await client.search({
      index: 'user',
      type: '_doc',
      body: {
        query: {
            term: {"email.keyword": email}
        }
    }
  }).then(function(resp) {
      response=resp.hits.hits[0]._source;console.log(response);
  }).catch(err=>{
    response={};
  });

    return response;
};
//async function to get all user
const getAllUsers = async () => {
  var response={};

    await client.search({
      index: 'user',
      type: '_doc',
      body: {
        query: {
            match_all:{}
        }
    }
  }).then(function(resp) {
      response=resp.hits.hits;
  }).catch(err=>{
    response={};
  });

    return response;
  
};
// async function to add or update data
const addOrUpdateUsers =  async (payload)=>{var response='';
  
    await client.search({
      index: 'user',
      type: '_doc',
      body: {
        query: {
            term: {"email.keyword": payload.email}
        }
    }
  }).then(async (resp)=>{
      if(resp.hits.total.value==0){
        await client.index({
          index:'user',
          body:payload
        }).then(resp=>{
          response=`added ${payload.firstname} ${payload.lastname}`;
        }).catch(err=>{
          response='error adding';
        });
      }else{
        await client.updateByQuery({
          index: 'user',
          refresh: true,
          body: {
            script: {
              "inline": `ctx._source.firstname ="${payload.firstname}";ctx._source.lastname = "${payload.lastname}";ctx._source.birthdate = "${payload.birthdate}";
              ctx._source.age = "${payload.age}";  
              ctx._source.phonenumber = "${payload.phonenumber}";`
            },
            query: {
              term: {"email.keyword": payload.email}
            }
          }
        }).then(resp=>{
          response=`updated ${payload.firstname} ${payload.lastname}`;
        }).catch(err=>{
         reponse="error updating......";
        });
      }
  }).catch(err=>{
    
  });
    
  return response; 
 
};
// async function to delete data 
const deleteUsers = async (email) => {
  var response='deleted none';

 await client.deleteByQuery({
  index: 'user',
  type: '_doc',
  body: {
    query: {
        term: {"email.keyword": email}
    }
}
}).then(function(resp) {
 response='deleted user';
}).catch(err=>{
respoonse='error deleting user';
});

return response;
};


module.exports = { deleteUsers, addOrUpdateUsers, fetchUser, getAllUsers };