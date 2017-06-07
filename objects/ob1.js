function VehicleConstructor(name, numOfWheels, numOfPassengers, noise) {
    return {
        name: name,
        numOfWheels: numOfWheels,
        numOfPassengers: numOfPassengers,
        makeNoise: function() {
            console.log(noise);
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

let vehicles = [Bike(), Sedan(4)];

for (var index = 0; index < vehicles.length; index++) {
    var v = vehicles[index];

    v.makeNoise();
}