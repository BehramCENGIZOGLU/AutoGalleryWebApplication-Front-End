// To perform operations related to Local Storage

function Storage() {
    Storage.prototype.addVehicleToStorage = function (newVehicle) {
        let vehicles = this.getVehiclesFromStorage();

        vehicles.push(newVehicle);

        localStorage.setItem("vehicles", JSON.stringify(vehicles));

    }

    Storage.prototype.getVehiclesFromStorage = function () {
        let vehicles;
        if (localStorage.getItem("vehicles") === null) {
            vehicles = [];
        } else {
            vehicles = JSON.parse(localStorage.getItem("vehicles"));
        }

        return vehicles;
    }
}

Storage.prototype.deleteVehicleFromStorage = function(vehicleTitle){
    let vehicles = this.getVehiclesFromStorage();
    vehicles.forEach(function(vehicle,index){
        vehicles.splice(index,1);
        localStorage.setItem("vehicles",JSON.stringify(vehicles));
    });
}

Storage.prototype.clearAllVehiclesFromStorage = function(){
    localStorage.removeItem("vehicles");
}