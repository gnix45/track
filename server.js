const express = require('express');
const app = express();
const port = 3000;

// Fake travel data generator
function generateFakeTravelData() {
    const startLocation = { lat: 48.8566, lon: 2.3522 }; // Paris, for example
    const endLocation = { lat: 52.5200, lon: 13.4050 }; // Berlin

    const data = [];
    const steps = 50;
    const latStep = (endLocation.lat - startLocation.lat) / steps;
    const lonStep = (endLocation.lon - startLocation.lon) / steps;

    for (let i = 0; i <= steps; i++) {
        data.push({
            lat: startLocation.lat + latStep * i,
            lon: startLocation.lon + lonStep * i
        });
    }
    return data;
}

// Store fake travel data in memory
const fakeTravelData = generateFakeTravelData();

app.get('/track/:hexCode', (req, res) => {
    // For simplicity, return the same fake travel data for any hex code
    res.json(fakeTravelData);
});

app.listen(port, () => {
    console.log(`Fake Travel Tracker app listening at http://localhost:${port}`);
});