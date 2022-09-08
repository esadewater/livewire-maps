export default class Marker {
    constructor(map, liveWireComponent, properties) {
        this.mapMarker = this.initMarker(map, properties);
        this.liveWireComponent = liveWireComponent;

        /*marker.addListener("click", () => {
            const event = new Event('markerClick');
            event.markerId = positionMarker.project_id;
            clickListener(event);
        });*/
    }

    initMarker(map, properties) {
        const position = properties.position;

        return new google.maps.Marker({
            position: {
                lat: parseFloat(position.lat),
                lng: parseFloat(position.lng)
            },
            map: map,
        });
    }

    onMarkerClick = function () {

    }

    getMapMarker() {
        return this.mapMarker;
    }

    delete() {
        this.mapMarker.setMap(null);
    }
}
