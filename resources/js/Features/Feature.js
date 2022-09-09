export default class Feature {
    constructor(component, map) {
        this.component = component;
        this.map = map;
    }

    static getFeatureName() {
        return '';
    }

    static isFeatureEnabled(component) {
        return component.features.includes(this.getFeatureName());
    }
}
