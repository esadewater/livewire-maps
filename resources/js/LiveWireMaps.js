import Map from "./Map";

const GOOGLE_MAPS_LOAD_EVENT = 'googleMapsLoaded';
const LIVEWIRE_COMPONENT_LOAD_EVENT = 'component.initialized';

let GOOGLE_MAPS_LOADED = false

export function init() {
    window.initLivewireMaps = function () {
        GOOGLE_MAPS_LOADED = true;

        const mapEvent = new Event(GOOGLE_MAPS_LOAD_EVENT);
        document.dispatchEvent(mapEvent);
    }

    Livewire.hook(LIVEWIRE_COMPONENT_LOAD_EVENT, (component) => {
        if (GOOGLE_MAPS_LOADED) {
            createMap(component)
        } else {
            document.addEventListener(GOOGLE_MAPS_LOAD_EVENT, function () {
                createMap(component)
            })
        }
    })

    function createMap(component) {
        const targetElement = component.el.getElementsByTagName('div')[0];
        new Map(component.$wire, targetElement)
    }
}
