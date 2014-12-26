var coffee = require('coffee-script/register');
var Car = require('./app/services/car');
var Server = require('./app/services/server');

var car = new Car()
var server = new Server(car)

server.listen(3000)

process.on('SIGINT', function(){
	car.destroy()
});

module.exports = car


