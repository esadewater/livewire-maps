export default class Feature {
    constructor(component, map) {
        this.component = component;
        this.map = map;
    }

    static isFeatureEnabled(component) {
        return false;
    }
}
