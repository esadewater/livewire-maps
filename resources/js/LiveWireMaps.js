import Map from "./Map";

const GOOGLE_MAPS_LOAD_EVENT = 'googleMapsLoaded';
const LIVEWIRE_COMPONENT_LOAD_EVENT = 'component.initialized';
const LIVEWIRE_LIBRARY_LOAD_EVENT = 'livewire:load';

let GOOGLE_MAPS_LOADED = false
let LIVEWIRE_LIBRARY_LOADED = false;

let LIVEWIRE_MAPS = [];

export function init() {
    window.initLivewireMaps = function () {
        GOOGLE_MAPS_LOADED = true;

        const mapEvent = new Event(GOOGLE_MAPS_LOAD_EVENT);
        document.dispatchEvent(mapEvent);
    }

    // document.addEventListener(LIVEWIRE_LIBRARY_LOAD_EVENT, function () {
    //     LIVEWIRE_LIBRARY_LOADED = true;
    //     console.log("LOAD LW")
    //
    //     for (const map of LIVEWIRE_MAPS) {
    //         createMap(map)
    //     }
    // })

    Livewire.hook(LIVEWIRE_COMPONENT_LOAD_EVENT, (component) => {
        if (GOOGLE_MAPS_LOADED) {
            new Map(component.$wire, component.el);
        } else {
            document.addEventListener(GOOGLE_MAPS_LOAD_EVENT, function () {
                new Map(component.$wire, component.el);
            })
        }
    })

    // function initMap(component) {
    //     console.log("INIT MAP, LW ready? " + LIVEWIRE_LIBRARY_LOADED);
    //
    //     if (LIVEWIRE_LIBRARY_LOADED) {
    //         createMap(component)
    //     } else {
    //         LIVEWIRE_MAPS.push(component);
    //     }
    // }
    //
    // function createMap(component) {
    //     console.log("CREATE MAP, LW ready? " + LIVEWIRE_LIBRARY_LOADED);
    //
    //     console.log(component)
    //
    //     new Map(Livewire.find(component.id), component.el);
    // }
}
