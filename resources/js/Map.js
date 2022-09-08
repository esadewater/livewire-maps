import {throttle} from "lodash/function";
import Marker from "./Marker";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export default class Map {

    LIMIT_RATE = 1000;

    constructor(mapElement) {
        this.mapElement = mapElement
        this.liveWireComponent = this.initLiveWire();
        this.map = this.initMap();

        this.liveWireComponent.on('updatedMarkers', this.onUpdateMarkers.bind(this));
    }

    initMap() {
        const centerLat = this.liveWireComponent.centerLat,
            centerLng = this.liveWireComponent.centerLng,
            zoom = this.liveWireComponent.zoom;

        const properties = {
            center: new google.maps.LatLng(parseFloat(centerLat || "0"), parseFloat(centerLng || "0")),
            zoom: parseInt(zoom || "5"),
        };

        const map = new google.maps.Map(this.mapElement, properties);

        map.addListener('center_changed', this.onCenterMove.bind(this));
        map.addListener('bounds_changed', this.onBoundsMove.bind(this))

        return map;
    }

    initLiveWire() {
        const liveWireComponentId = this.mapElement.dataset.lwMapId;

        return Livewire.find(liveWireComponentId)
    }

    onCenterMove = throttle(function () {
        const center = this.map.getCenter();

        this.liveWireComponent.onCenterChanged(center.lat(), center.lng());
    }, this.LIMIT_RATE);

    onBoundsMove = throttle(function () {
        const bounds = this.map.getBounds()
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();

        this.liveWireComponent.onBoundsChanged(northEast.lat(), northEast.lng(), southWest.lat(), southWest.lng());
    }, this.LIMIT_RATE);

    onUpdateMarkers = function() {
        if (this.mapMarkers) {
            for (const mapMarker of this.mapMarkers) {
                mapMarker.delete();
            }
        }

        for (const marker of this.liveWireComponent.markers) {

        }
        const markers = this.liveWireComponent.markers;
        this.mapMarkers = markers.map((marker) => new Marker(this.map, this.liveWireComponent, marker));

        //new MarkerClusterer({map, mapMarkers});
    }
}
