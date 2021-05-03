const Hapi = require('hapi');
const fs = require('fs');
//asyn function to fetch user data
const fetchUser = async (email) => {
  
    var data=fs.readFileSync('./users.json');
    var response='found none';
    let jsondata = JSON.parse(data);
    Object.entries(jsondata).forEach((entry) => {
      const [key, value] = entry;
      if (value.email==email)
      { response=`name:${value.firstname} ${value.lastname}, Birthdate:${value.birthdate}, Age:${value.age}, Phonenumber:${value.phonenumber}`;}
    });
    return response;
};
//async function to get all user
const getAllUsers = async () => {
  
  var data=fs.readFileSync('./users.json');
  return data;
};
// async function to add or update data
const addOrUpdateUsers =  async (payload)=>{var response='';
  var data=fs.readFileSync('./users.json');
    
    var databases = JSON.parse(data);var flag=0;
    Object.entries(databases).forEach((entry) => {
      const [key, value] = entry;
      if (value.email==payload.email)
      { flag=1;value.firstname=payload.firstname;
        value.lastname=payload.lastname;
        value.birthdate=payload.birthdate;
        value.age=payload.age;
        value.phonenumber=payload.phonenumber;
        response=`updated ${payload.firstname} ${payload.lastname}`;}
    });
    let wholeArray = Object.keys(databases).map(key => databases[key]);
    if(flag==0){
    wholeArray.push({
            firstname: `${payload.firstname}`,
            lastname: `${payload.lastname}`,
            email: `${payload.email}`,
            birthdate:`${payload.birthdate}`,
            age:`${payload.age}`,
            phonenumber:`${payload.phonenumber}`
    });response=`added ${payload.firstname} ${payload.lastname}`;}
    const jsondata=JSON.stringify(wholeArray);
    fs.writeFile('./users.json', jsondata, (err) => {
        if (err) {
            console.log(`Error writing file: ${err}`);
        }
    });
  return response;
};
// async function to delete data 
const deleteUsers = async (email) => {
  
  var data=fs.readFileSync('./users.json');
  var response='deleted none';
  let database = JSON.parse(data);
  Object.entries(database).forEach((entry) => {
    const [key, value] = entry;
    if (value.email==email)
    { response=`deleted ${value.firstname} ${value.lastname}`;
      database.splice(key,1);    }
  });
  const jsondata=JSON.stringify(database);
  fs.writeFile('./users.json', jsondata, (err) => {
    if (err) {
        console.log(`Error writing file: ${err}`);
    }
 });
  return response;
};
module.exports = { deleteUsers, addOrUpdateUsers, fetchUser, getAllUsers };