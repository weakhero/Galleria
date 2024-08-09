document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 2); // Initial map view (centered on the equator)

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to indicate the user's location
    const userMarker = L.marker([0, 0]).addTo(map);

    // Function to update the map with the user's location
    function updateMap(position) {
        const { latitude, longitude } = position.coords;
        const userLocation = [latitude, longitude];
        
        // Update the marker position
        userMarker.setLatLng(userLocation);

        // Center the map on the user's location
        map.setView(userLocation, 13);
    }

    // Handle errors in getting the location
    function handleError(error) {
        console.error(`Error: ${error.message}`);
    }

    // Watch the user's location
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateMap, handleError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
});
