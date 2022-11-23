// To perform interface operations

function UI() {

}

UI.prototype.addVehicleToUI = function (newVehicle) {

    const vehicleList = document.getElementById("vehicles");

    vehicleList.innerHTML += ` 
    <tr>
        <td><img src="${newVehicle.url}" class="img-fluid img-thumbnail"></td>
        <td>${newVehicle.title}</td>
        <td>${newVehicle.price}</td>
        <td><a href="#" id = "delete-vehicle" class = "btn btn-danger">Delete Vehicle</a></td>
  </tr>
`
}

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessage = function (message, type) {
    const cardBody = document.querySelector(".card-body");

    // Creating the alert div
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000);
}

UI.prototype.loadAllVehicles = function (vehicles) {
    const vehicleList = document.getElementById("vehicles");

    vehicles.forEach(function (vehicle) {
        vehicleList.innerHTML += ` 
        <tr>
        <td><img src="${vehicle.url}" class="img-fluid img-thumbnail"></td>
        <td>${vehicle.title}</td>
        <td>${vehicle.price}</td>
        <td><a href="#" id = "delete-vehicle" class = "btn btn-danger">Delete Vehicle</a></td>
  </tr>`
    });
}

UI.prototype.deleteVehicleFromUI = function (element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllVehicleFromUI = function () {
    const vehicleList = document.getElementById("vehicles");

    while (vehicleList.firstElementChild !== null) {
        vehicleList.firstChild.remove();
    }
}
