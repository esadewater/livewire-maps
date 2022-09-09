import Feature from "../Feature";
import {throttle} from "lodash/function";

export default class MapMoveListener extends Feature {

    constructor(component, map) {
        super(component, map);

        this.rateLimit = parseInt(this.component.rateLimit);
        map.addListener('bounds_changed', throttle(this.onMapMoved.bind(this), this.rateLimit));
    }

    static getFeatureName() {
        return 'hasMapMoveListener';
    }

    onMapMoved() {
        const center = this.map.getCenter();
        const bounds = this.map.getBounds()
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();

        this.component.onMapMoved(center.lat(), center.lng(), northEast.lat(), northEast.lng(), southWest.lat(), southWest.lng());
    }
}
