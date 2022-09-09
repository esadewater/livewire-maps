import Marker from "./Marker";
import Feature from "../Feature";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export default class MapMarkers extends Feature {

    constructor(component, map) {
        super(component, map);

        this.enableClustering = this.component.enableClustering;
        this.component.on('updatedMarkers', this.onUpdateMarkers.bind(this));

        this.onUpdateMarkers();
    }

    static getFeatureName() {
        return 'hasMapMarkers';
    }

    onUpdateMarkers()  {
        if (this.mapMarkers) {
            for (const mapMarker of this.mapMarkers) {
                mapMarker.delete();
            }
        }

        const markers = this.component.markers;
        this.mapMarkers = markers.map((marker) => new Marker(this.map, this.component, marker));

        if (this.enableClustering) {
            new MarkerClusterer({
                'map': this.map,
                'markers': this.mapMarkers.map((marker) => marker.getMapMarker())
            });
        }
    }
}
