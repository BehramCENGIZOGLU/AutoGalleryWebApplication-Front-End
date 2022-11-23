// Main js file of vehicle list

const form = document.getElementById("vehicle-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-vehicles");


// Initializing the UI object

const ui = new UI();

const storage = new Storage();


// Upload all events

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addVehicle);

    document.addEventListener("DOMContentLoaded", function () {
        let vehicles = storage.getVehiclesFromStorage();
        ui.loadAllVehicles(vehicles);
    });

    cardBody.addEventListener("click", deleteVehicle);

    clear.addEventListener("click",clearAllVehicle);
}

function addVehicle(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        // Error
        ui.displayMessage("Fill in all fields.", "danger");
    } else {
        // New Vehicle

        const newVehicle = new Vehicle(title, price, url);

        // Adding tools to the interface
        ui.addVehicleToUI(newVehicle);

        storage.addVehicleToStorage(newVehicle);

        ui.displayMessage("New vehicle added.", "success");
    }
    ui.clearInputs(titleElement, priceElement, urlElement);
    e.preventDefault();
}


function deleteVehicle(e) {
    if (e.target.id === "delete-vehicle") {
        ui.deleteVehicleFromUI(e.target);
        
        storage.deleteVehicleFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Vehicle deletion was successful.","success");
    }
}

function clearAllVehicle(){
   
    if(confirm("Are you sure you want to delete all vehicles ?")=== true){
        ui.clearAllVehicleFromUI();
        storage.clearAllVehiclesFromStorage();
    }
}