const myos=require('os');

var user1=myos.arch();
var user2=myos.platform();
var user3=myos.userInfo();
var user4=myos.networkInterfaces();


console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);


