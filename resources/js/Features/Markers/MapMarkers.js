import Marker from "./Marker";
import Feature from "../Feature";

export default class MapMarkers extends Feature {

    constructor(component, map) {
        super(component, map);

        console.log('Loaded Markers')

        this.component.on('updatedMarkers', this.onUpdateMarkers.bind(this));
    }

    static isFeatureEnabled(component) {
        return component.hasMapMarkers;
    }

    onUpdateMarkers = function() {
        if (this.mapMarkers) {
            for (const mapMarker of this.mapMarkers) {
                mapMarker.delete();
            }
        }

        for (const marker of this.component.markers) {

        }
        const markers = this.component.markers;
        this.mapMarkers = markers.map((marker) => new Marker(this.map, this.component, marker));

        //new MarkerClusterer({map, mapMarkers});
    }
}
