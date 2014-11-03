(function(){

	var Elevator = function(log){
		this.awaitedFloors = [];
		this.destinationFloors = [];
		this.currentFloor = 0;
		this.log = log;
	};
	
	Elevator.prototype.callMe = function(floor){
		if (this.awaitedFloors.indexOf(floor) == -1)
		{
			this.awaitedFloors.push(floor);
		}
	};
	
	
	Elevator.prototype.inputDestination = function(floor){
		if (this.destinationFloors.indexOf(floor) == -1)
		{
			this.destinationFloors.push(floor);
		}
	};
	
	Elevator.prototype.goTo = function(floor){
		while(this.currentFloor != floor)
		{
			if (this.currentFloor > floor){
				this.currentFloor--;
			}else{
				this.currentFloor++;
			}
			
			if (this.log)
				console.log("------ "+ this.currentFloor);
		}
		var index = this.destinationFloors.indexOf(this.currentFloor);
		if (index != -1){
			this.destinationFloors.splice(index,1);
		}
		index = this.awaitedFloors.indexOf(this.currentFloor);
		if (index != -1){
			this.awaitedFloors.splice(index,1);
		}
		
		if (this.log)
			console.log("DING - "+ this.currentFloor);
	};
	
	Elevator.prototype.getNextDestination = function(){
		var dest = this.currentFloor;
		if (this.destinationFloors.length > 0){
			dest = getMin(this.destinationFloors, this.currentFloor);
		}
		if (this.awaitedFloors.length > 0){
			var awaitFloor = getMin(this.awaitedFloors, this.currentFloor);
			if (dest != this.currentFloor){
				if (this.currentFloor > dest && awaitFloor < this.currentFloor && awaitFloor > dest) {
					return awaitFloor;
				}else if (this.currentFloor < dest && awaitFloor > this.currentFloor && awaitFloor < dest) {
					return awaitFloor;
				}
			}else {
				dest = awaitFloor;
			}
		}
		return dest;
	};
	
	var getMin = function(array, from){
		var min = undefined;
		for (var i=0; i<array.length; i++){
			if (min === undefined || Math.abs(array[i] - from) < Math.abs(min - from)){
				min = array[i];
			}
		}
		return min;
	}
	
	window.Elevator = Elevator;
}());