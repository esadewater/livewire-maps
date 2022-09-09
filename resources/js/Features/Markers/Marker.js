export default class Marker {
    constructor(map, component, properties) {
        this.mapMarker = this.initMarker(map, properties);
        this.component = component;
        this.payload = properties.payload;

        this.mapMarker.addListener("click", this.onMarkerClick.bind(this));
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
        this.component.onMarkerClick(this.payload)
    }

    getMapMarker() {
        return this.mapMarker;
    }

    delete() {
        this.mapMarker.setMap(null);
    }
}
