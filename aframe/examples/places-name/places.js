
window.onload = () => {
    let method = 'static';
    if (method === 'static') {
        let places = staticLoadPlaces();
        return renderPlaces(places);
    }

};

function staticLoadPlaces() {
    return [
        {
            name: "house",
            location: {
              lat: 37.571217, // change here latitude if using static data
              lng: 126.946923, // change here longitude if using static data
            }
        },

        {
            name: "home",
            location: {
              lat: 37.571218, // change here latitude if using static data
              lng: 126.946924, // change here longitude if using static data
            }
        }
    ];
}


function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let text = document.createElement('a-link');
        text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        text.setAttribute('title', place.name);
        text.setAttribute('href', 'http://www.example.com/');
        text.setAttribute('scale', '15 15 15');

        text.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(text);
    });
}
