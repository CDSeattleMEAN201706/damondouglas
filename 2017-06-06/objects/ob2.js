function VehicleConstructor(name, numOfWheels, numOfPassengers, noise, speed) {
    let distance_travelled = 0;
    function updateDistanceTravelled() {
        if (speed) distance_travelled += speed;
    }
    return {
        name: name,
        speed: speed,
        numOfWheels: numOfWheels,
        numOfPassengers: numOfPassengers,
        makeNoise: function() {
            console.log(noise);
        },
        move: function() {
            updateDistanceTravelled();
            this.makeNoise();
        },
        checkMiles: function() {
            console.log(distance_travelled);
        }
    };
}

function Bike() {
    return VehicleConstructor('bike', 2, 1, 'ring ring!');
}

function Sedan(numOfPassengers) {
    return VehicleConstructor('sedan', 4, numOfPassengers, 'Honk Honk!');
}

function Bus() {
    let veh = VehicleConstructor('bus', 6, 0, '');
    veh.pickUp = function(numOfPassengers) {
        this.numOfPassengers += numOfPassengers;
    }
    return veh;
}

(() => {
    s = VehicleConstructor('foo', 4, 1, 'buzz', 10);
    s.move();
    s.checkMiles();
})();