var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth);
 // var date = moment();
 // console.log(date.format('MMM Do YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var time = moment(createdAt);
console.log(time.format('h:mm a'));
