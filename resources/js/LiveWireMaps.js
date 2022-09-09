import Map from "./Map";

const GOOGLE_MAPS_LOAD_EVENT = 'googleMapsLoaded';
const LIVEWIRE_COMPONENT_LOAD_EVENT = 'component.initialized';
const LIVEWIRE_LIBRARY_LOAD_EVENT = 'livewire:load';

let GOOGLE_MAPS_LOADED = false
let LIVEWIRE_LIBRARY_LOADED = false;

export function init() {
    window.initLivewireMaps = function () {
        GOOGLE_MAPS_LOADED = true;

        const mapEvent = new Event(GOOGLE_MAPS_LOAD_EVENT);
        document.dispatchEvent(mapEvent);
    }

    Livewire.hook(LIVEWIRE_COMPONENT_LOAD_EVENT, (component) => {
        if (GOOGLE_MAPS_LOADED) {
            new Map(component);
        } else {
            document.addEventListener(GOOGLE_MAPS_LOAD_EVENT, function () {
                new Map(component);
            })
        }
    })
}
