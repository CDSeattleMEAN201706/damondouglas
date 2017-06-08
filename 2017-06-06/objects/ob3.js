function VehicleConstructor(name, numOfWheels, numOfPassengers, noise, speed) {
    let distance_travelled = 0;
    function updateDistanceTravelled() {
        if (speed) distance_travelled += speed;
    }
    this.name = name;
    this.speed = speed;
    this.numOfWheels = numOfWheels;
    this.numOfPassengers = numOfPassengers;

    VehicleConstructor.prototype.makeNoise = function() {
        console.log(noise);
    };

    VehicleConstructor.prototype.move = function() {
        updateDistanceTravelled();
        this.makeNoise();
    }

    VehicleConstructor.prototype.checkMiles = function() {
        console.log(distance_travelled);
    }

    VehicleConstructor.prototype.generateVIN = function() {
        return Math.floor(100000000000000*Math.random()).toString();
    }
}


function Bike() {
    return VehicleConstructor('bike', 2, 1, 'ring ring!', 0);
}

function Sedan(numOfPassengers) {
    return VehicleConstructor('sedan', 4, numOfPassengers, 'Honk Honk!', 0);
}

function Bus() {
    let veh = VehicleConstructor('bus', 6, 0, '', 0);
    veh.pickUp = function(numOfPassengers) {
        this.numOfPassengers += numOfPassengers;
    }
    return veh;
}

(() => {
    let v = new VehicleConstructor('foo', 4, 1, 'buzz', 10);
    v.move();
    v.checkMiles();
    console.log(v.generateVIN());
})();