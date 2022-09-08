import Map from "./Map";

export function init() {
    window.initGoogleMaps = function () {
        const mapEvent = new Event('mapsReady');
        document.dispatchEvent(mapEvent);
    }

    const liveWireLoad = new Promise((resolve) => document.addEventListener('livewire:load', resolve, false));
    const mapsLoad = new Promise((resolve) => document.addEventListener('mapsReady', resolve, false));

    Promise.all([liveWireLoad, mapsLoad]).then(function () {
        const lwMaps = document.getElementsByClassName('lw-map');

        for (const mapElement of lwMaps) {
            new Map(mapElement);
        }
    });
}
