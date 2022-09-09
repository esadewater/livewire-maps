import {MarkerClusterer} from "@googlemaps/markerclusterer";
import {init} from "./LiveWireMaps";

console.log('init lw maps')
init();

/*
window.addMarkers = function (map, markers, clickListener) {
    const mapMarkers = markers.map((positionMarker) => {
        const marker = new google.maps.Marker({
            position: {
                lat: parseFloat(positionMarker.position_lat),
                lng: parseFloat(positionMarker.position_lng)
            },
            map: map,
        });

        marker.addListener("click", () => {
            const event = new Event('markerClick');
            event.markerId = positionMarker.project_id;
            clickListener(event);
        });

        return marker;
    });

    new MarkerClusterer({map, markers: mapMarkers});
}

*/
