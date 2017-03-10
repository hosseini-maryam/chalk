//Implement your own module that exports a an object containing a function. 
//However the function you export should invoke a 'private' function that is 
//defined within your module but not exported from it.

module.exports = function(){
  return info();
}

function info(){
  // var result = num * num;
  // return result;
  var object = {name: "Ghazaleh",age: "25",origin: "Iran"};
  console.log(object.age);
}