// Actualizar hora y fecha
function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const time = now.toLocaleTimeString('es-ES');
    const date = now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    timeElement.textContent = `Hora: ${time}`;
    dateElement.textContent = `Fecha: ${date}`;
}

// Obtener ubicación
function updateLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                locationElement.textContent = `Ubicación: Latitud ${latitude.toFixed(2)}, Longitud ${longitude.toFixed(2)}`;
            },
            (error) => {
                locationElement.textContent = 'Ubicación: No se pudo obtener la ubicación';
                console.error('Error obteniendo ubicación:', error);
            }
        );
    } else {
        locationElement.textContent = 'Ubicación: Geolocalización no soportada por el navegador';
    }
}

// Actualizar cada segundo
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
updateLocation();
