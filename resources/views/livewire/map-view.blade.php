<div class="relative w-full h-full m-0 p-0">
    <div wire:ignore
         class="w-full h-full m-0 p-0"></div>
</div>

{{--

@push('scripts')
    <script>
        /*window.initGoogleMaps = function () {
            const mapEvent = new Event('mapsReady');
            window.dispatchEvent(mapEvent);
        }

        window.initMap = function (mapId, centerLat, centerLng, zoom) {
            const properties = {
                center: new google.maps.LatLng(parseFloat(centerLat || "0"), parseFloat(centerLng || "0")),
                zoom: parseInt(zoom || "5"),
            };

            return new google.maps.Map(document.getElementById(mapId), properties);
        }

        window.addEventListener('mapsReady', () => {
            const map = initMap("map-{{ $mapId }}", "{{ $centerLat }}", "{{ $centerLng }}", "{{ $zoom }}");

            map.addListener('click', (event) => {
                const clickEvent = new Event('mapClick-{{ $mapId }}');

                const latLng = event.latLng;
                clickEvent.lat = latLng.lat();
                clickEvent.lng = latLng.lng();

                window.dispatchEvent(clickEvent);
            });

            const markerListener = (event) => {
                const clickEvent = new Event('markerClick-{{ $mapId }}');
                clickEvent.markerId = event.markerId;
                window.dispatchEvent(clickEvent);
            }
            //addMarkers(map, @js($markers), markerListener)
        });*/

        /*window.addEventListener('livewire:load', () => {
            const component = @this;

            window.addEventListener('mapClick-{{ $mapId }}', (event) => {
                console.log(event)
                component.onMapClick(event.lat, event.lng);
            })

            window.addEventListener('markerClick-{{ $mapId }}', (event) => {
                console.log(event)
                component.onMarkerClick(event.markerId);
            })
        })*/
    </script>
@endpush
--}}
