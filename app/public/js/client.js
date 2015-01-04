$(function(){
	
	var pressOptions = {
	    // event: 'press', //no need to pass defaults
	    // pointer: 1,
	    // threshold: 5,
	    //time: 1
	};
	
	var turnLeft = function(ev) {
		ev.preventDefault();
		if(ev.type == "touchstart" || ev.type == "press"){
			$('.btn-left').addClass('active');
			rpcs.emit('cmd','left')
		}else{
			$('.btn-left').removeClass('active');
			rpcs.emit('cmd','straight')
		}
	};
	if(!Modernizr.touch){
		var btnLeft = new Hammer($('.btn-left').get(0));
		btnLeft.on('press pressup', turnLeft);
	}else{
		$('.btn-left').bind('touchstart touchend',turnLeft);
	}
	
	
	var turnRight = function(ev) {
		ev.preventDefault();
		if(ev.type == "touchstart" || ev.type == "press"){
			$('.btn-right').addClass('active');
			rpcs.emit('cmd','right')
		}else{
			$('.btn-right').removeClass('active');
			rpcs.emit('cmd','straight')
		}
	};
	if(!Modernizr.touch){
		var btnRight = new Hammer($('.btn-right').get(0));
		btnRight.on('press pressup', turnRight);
	}else{
		$('.btn-right').bind('touchstart touchend',turnRight);
	}
	
	
	var driveForward = function(ev) {
		ev.preventDefault();
		if(ev.type == "touchstart" || ev.type == "press"){
			$('.btn-up').addClass('active');
			rpcs.emit('cmd','forward')
		}else{
			$('.btn-up').removeClass('active');
			rpcs.emit('cmd','stop')
		}	
	};
	if(!Modernizr.touch){
		var btnUp = new Hammer($('.btn-up').get(0));
		btnUp.on('press pressup', driveForward);
	}else{
		$('.btn-up').bind('touchstart touchend',driveForward);
	}
	
	
	var driveBackward = function(ev) {
		ev.preventDefault();
		if(ev.type == "touchstart" || ev.type == "press"){
			$('.btn-down').addClass('active');
			rpcs.emit('cmd','backward')
		}else{
			$('.btn-down').removeClass('active');
			rpcs.emit('cmd','stop')
		}	
	};
	if(!Modernizr.touch){
		var btnDown = new Hammer($('.btn-down').get(0));
		btnDown.on('press pressup', driveBackward);
	}else{
		$('.btn-down').bind('touchstart touchend',driveBackward);
	}
	
	var emergencyStop = function(ev) {
		ev.preventDefault();
		if(ev.type == "touchstart" || ev.type == "press"){
			$('.btn-stop').addClass('active');
		}else{
			$('.btn-stop').removeClass('active');
		}
		rpcs.emit('cmd','emergency')
	};
	
	if(!Modernizr.touch){
		var btnStop = new Hammer($('.btn-stop').get(0));
		btnStop.on('press pressup', emergencyStop);
	}else{
		$('.btn-stop').bind('touchstart touchend',emergencyStop);
	}
});