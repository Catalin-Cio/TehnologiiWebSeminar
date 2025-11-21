async function getObjectFromUrl(url) {
    const response = await fetch(url, {
        headers: { "User-Agent": "Node.js client" }
    });
    const text = await response.text();
    return JSON.parse(text);
}


async function getRomaniaBounds() {
    const url = `https://nominatim.openstreetmap.org/search?country=romania&format=json`;
    const data = await getObjectFromUrl(url);

    return {
        minLatitude: Number(data[0].boundingbox[0]),
        maxLatitude: Number(data[0].boundingbox[1]),
        minLongitude: Number(data[0].boundingbox[2]),
        maxLongitude: Number(data[0].boundingbox[3])
    };
}


async function getPlanesOverRomania() {
    const b = await getRomaniaBounds();

    const url = `https://opensky-network.org/api/states/all?lamin=${b.minLatitude}&lomin=${b.minLongitude}&lamax=${b.maxLatitude}&lomax=${b.maxLongitude}`;

    const data = await getObjectFromUrl(url);

    if (!data.states) return [];

    return data.states.map(s => ({
        callsign: s[1] || "necunoscut",
        longitude: s[5],
        latitude:  s[6]
    }));
}

(async () => {
    const planes = await getPlanesOverRomania();

    console.log("Avioane deasupra României:\n");

    if (planes.length === 0) {
        console.log("Nu există avioane în zonă în acest moment.");
        return;
    }

    planes.forEach(p => {
        console.log(`• ${p.callsign} (lat=${p.latitude}, lon=${p.longitude})`);
    });
})();
