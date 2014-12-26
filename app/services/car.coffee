gpio = require('gpio');

module.exports = class Car 
	
	constructor: (gpioIds=null) ->
		
		if !gpioIds
			@gpioIds = left: 13, right: 6, forward: 26, backward: 19
		else
			@gpioIds = gpioIds
			
		@gpios = left: null, right: null, forward: null, backward: null
		
		for cmd, id of @gpioIds
			@gpios[cmd] = gpio.export(id, {direction: "out", ready: () ->})
		return @
			
	left: () ->
		@gpios.right.set(0)
		@gpios.left.set()
		return @
	right: () ->
		@gpios.left.set(0)
		@gpios.right.set()
		return @
	straight: () ->
		@gpios.left.set(0)
		@gpios.right.set(0)
		return @
	forward: () ->
		@gpios.backward.set(0)
		@gpios.forward.set()
		return @
	backward: () ->
		@gpios.forward.set(0)
		@gpios.backward.set()
		return @
	stop: () ->	
		@gpios.forward.set(0)
		@gpios.backward.set(0)
		return @
	emergency: () ->
		for cmd of @gpios
			@gpios[cmd].reset()
		return @
	destroy: () ->
		for cmd of @gpios
			@gpios[cmd].removeAllListeners()
			@gpios[cmd].reset()
		return @