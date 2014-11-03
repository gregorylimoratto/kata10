describe("Elevator SPEC - ", function () {
	
    it("should init Elevator", function () {
		var elevator = new Elevator();
		expect(elevator).toBeDefined();
		expect(elevator.currentFloor).toBe(0);
    });
	
	it("should be called to a specific floor", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		expect(elevator.awaitedFloors[0]).toBe(8);
	});
	
	it("should not add a new floor if exist in awaitedfloors", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		elevator.callMe(8);
		elevator.callMe(7);
		expect(elevator.awaitedFloors[0]).toBe(8);
		expect(elevator.awaitedFloors[1]).toBe(7);
		expect(elevator.awaitedFloors.length).toBe(2);
	});
	
	it("should not add a new floor if exist in awaitedfloors", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		elevator.callMe(8);
		elevator.callMe(7);
		expect(elevator.awaitedFloors[0]).toBe(8);
		expect(elevator.awaitedFloors[1]).toBe(7);
		expect(elevator.awaitedFloors.length).toBe(2);
	});
	
	it("should decide wich floor to go next", function(){
		var elevator = new Elevator();
		elevator.callMe(2);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(2);
	});
	
	it("should decide wich floor is the best choice to go next", function(){
		var elevator = new Elevator();
		elevator.currentFloor = 4;
		elevator.callMe(8);
		elevator.callMe(0);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(8);
	});
	
	it("should decide wich floor is the best choice to go next bis", function(){
		var elevator = new Elevator();
		elevator.currentFloor = 4;
		elevator.callMe(0);
		elevator.callMe(8);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(0);
	});
	
	it("should take user input", function(){
		var elevator = new Elevator();
		elevator.callMe(4);
		elevator.goTo(4);
		elevator.inputDestination(4);
		expect(elevator.destinationFloors[0]).toBe(4);
	});
	
	it("should not add a new floor if exist in inputDestination", function(){
		var elevator = new Elevator();
		elevator.callMe(4);
		elevator.goTo(4);
		elevator.inputDestination(4);
		elevator.inputDestination(4);
		expect(elevator.destinationFloors.length).toBe(1);
	});
	
	
	it("should take user input when choosing next destination", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		elevator.goTo(8);
		elevator.inputDestination(2);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(2);
	});
	
	it("should calculate next destination according current floor", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		elevator.goTo(8);
		elevator.inputDestination(2);
		elevator.callMe(6);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(6);
	});
	
	it("should not take deviation for input destination", function(){
		var elevator = new Elevator();
		elevator.callMe(8);
		elevator.goTo(8);
		elevator.inputDestination(2);
		elevator.callMe(9);
		var actual = elevator.getNextDestination();
		expect(actual).toBe(2);
	});
	
	
	it("should not take deviation for input destination", function(){
		var elevator = new Elevator(true);
		elevator.callMe(8);
		elevator.goTo(elevator.getNextDestination());
		elevator.inputDestination(2);
		elevator.callMe(9);
		elevator.goTo(elevator.getNextDestination());
		elevator.goTo(elevator.getNextDestination());
		elevator.inputDestination(0);
		elevator.goTo(elevator.getNextDestination());
	});
	
});