import Marker from "./Features/Markers/Marker";
import MapMarkers from "./Features/Markers/MapMarkers";
import MapMoveListener from "./Features/MoveListener/MapMoveListener";

export default class Map {

    constructor(component) {
        this.component = component;
        this.map = this.initMap(component.el);
        this.loadFeatures();
    }

    initMap(mapElement) {
        const centerLat = this.component.centerLat,
            centerLng = this.component.centerLng,
            zoom = this.component.zoom;

        const properties = {
            center: new google.maps.LatLng(parseFloat(centerLat || "0"), parseFloat(centerLng || "0")),
            zoom: parseInt(zoom || "5"),
        };

        return new google.maps.Map(mapElement, properties);
    }

    loadFeatures() {
        console.log('Load features');
        console.log(this.component);

        if (MapMarkers.isFeatureEnabled(this.component)) {
            new MapMarkers(this.component, this.map);
        }

        if (MapMoveListener.isFeatureEnabled(this.component)) {
            new MapMoveListener(this.component, this.map)
        }
    }
}
