express = require('express')
io = require('socket.io')
http = require('http')
_ = require('underscore')
		
module.exports = class Server
	
	constructor: (car=null) ->
		@car = car
		@app = express()
		@server = http.createServer(@app)
		@io = io.listen(@server)
		@io.on('connection', @connection)
		
		@app.set('view engine', 'ejs');
		@app.set('views', __dirname + '/../views');
		@app.use(express.static(__dirname  + '/../public'));
		
		@app.get '/', (req, res) ->
			res.render('index');
		
	listen: (port=3000) ->
		@server.listen(port);
	
	connection: (socket) =>
		
		socket.on 'cmd', (payload) =>
			if _.isFunction(@car[payload])
				@car[payload]()
			else
				console.error "'#{payload}' is not valid command."
				
		socket.on 'disconnect', () =>
			@car.emergency()
