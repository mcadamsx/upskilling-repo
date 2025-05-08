document.addEventListener('DOMContentLoaded', () => {
    const vehicleForm = document.getElementById('vehicleForm');
    const vehicleList = document.getElementById('vehicleList');
  
    vehicleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newVehicle = {
        driverName: document.getElementById('driverName').value,
        carType: document.getElementById('carType').value,
        carNumber: document.getElementById('carNumber').value,
        licenseNumber: document.getElementById('licenseNumber').value,
        fuelLevel: document.getElementById('fuelLevel').value,
        currentMileage: document.getElementById('currentMileage').value,
        nextServiceDate: document.getElementById('nextServiceDate').value,
        lastMaintenance: document.getElementById('lastMaintenance').value,
        remark: document.getElementById('remark').value,
        complaints: document.getElementById('complaints').value,
      };
      registerVehicle(newVehicle);
    });
  
    function registerVehicle(vehicle) {
      fetch('/api/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle),
      })
        .then(response => response.json())
        .then(vehicle => {
          displayVehicle(vehicle);
          vehicleForm.reset();
        })
        .catch(error => console.error(error));
    }
  
    function displayVehicle(vehicle) {
      const li = document.createElement('li');
      li.textContent = `${vehicle.driverName} - ${vehicle.carType} - ${vehicle.carNumber}`;
      vehicleList.appendChild(li);
    }
  
    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const previewContent = document.getElementById('previewContent');
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchText = searchInput.value.trim();
      if (searchText !== '') {
        searchVehicle(searchText);
      }
    });
    
    function searchVehicle(searchText) {
      fetch('/api/vehicles')
        .then(response => response.json())
        .then(vehicles => {
          const filteredVehicles = vehicles.filter(vehicle =>
            vehicle.driverName.toLowerCase().includes(searchText.toLowerCase())
          );
          displaySearchResults(filteredVehicles);
        })
        .catch(error => console.error(error));
    }
  
    function displaySearchResults(vehicles) {
      if (vehicles.length === 0) {
        previewContent.textContent = 'No matching vehicles found.';
        return;
      }
  
      const ul = document.createElement('ul');
      vehicles.forEach(vehicle => {
        const li = document.createElement('li');
        li.textContent = `${vehicle.driverName} - ${vehicle.carType} - ${vehicle.carNumber}`;
        ul.appendChild(li);
      });
  
      previewContent.innerHTML = '';
      previewContent.appendChild(ul);
    }
  });
  