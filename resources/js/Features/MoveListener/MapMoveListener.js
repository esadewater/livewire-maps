import {throttle} from "lodash/function";
import Feature from "../Feature";

export default class MapMoveListener extends Feature{

    LIMIT_RATE = 1000;

    constructor(component, map) {
        super(component, map);

        console.log('Loaded Move Listener')

        map.addListener('center_changed', this.onCenterMove.bind(this));
        map.addListener('bounds_changed', this.onBoundsMove.bind(this))
    }

    static isFeatureEnabled(component) {
        return component.hasMapMoveListener;
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
}
