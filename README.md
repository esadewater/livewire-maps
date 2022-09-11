# This is my package livewire-maps

Basic Google Maps-implementation for Laravel-Livewire currently supporting:
- Map-Markers
- Map-Move-Listeners

## Installation

You can install the package via composer:

```bash
composer require esadewater/livewire-maps
```

You can publish the assets with:

```bash
php artisan vendor:publish --tag="livewire-maps-assets"
```

Alternatively you can include the JavaScript resources in your app.js:

```javascript
const {init} = require("../../vendor/esadewater/livewire-maps/resources/js/LiveWireMaps");
init();
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="livewire-maps-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="livewire-maps-views"
```

## Usage

Get an API-key for the Google Maps Platform from [here](https://console.cloud.google.com/google/maps-apis/start) and add it to your .env-file:

```dotenv
GOOGLE_MAPS_API_KEY=YOUR_KEY_GOES_HERE
```

Add the following directive right after @livewireScripts:

```php
@livewireMapsScripts
```

Then you are ready to start with a basic map with a center point and a zoom:

```php
<livewire:map-view center-lat="52.004021" center-lng="7.710472" zoom="3" style="100vh" />
```

### Map-Markers

To add markers to your map you need to extend the MapView-component and add the MapMarkers-trait:

```php
class MyMapView extends ESadewater\LivewireMaps\Livewire\MapView {
    use \ESadewater\LivewireMaps\Traits\MapMarkers;
}
```

Your markers must be or extend the Marker-class which holds the position and a payload. Markers may be set to the map through the variable "$markers":

```php
<livewire:map-view :markers="$markers" style="100vh" />
```

They can be updated through the function "setMarkers($markers)"

```php
$mapView->setMarkers($markers)
```

Click-events on markers can be retrieved by overriding the "onMarkerClick"-function of your MapView:

```php
public function onMarkerClick(mixed $payload): void
{
    dd($payload)
}
```

Clustering of markers is enabled by default bit can be disabled by setting the variable "enableClustering" to false on your MapView:

```php
public bool $enableClustering = false;
```

### Map-Move-Listener

Movements of the map can be observed by extending the MapView-component and add the MapMoveListener-trait to your MapView:

```php
class MyMapView extends ESadewater\LivewireMaps\Livewire\MapView {
    use \ESadewater\LivewireMaps\Traits\MapMoveListener;
}
```

Center- or bound-changes can be retrieved by overriding the following functions:

```php
    public function onCenterChanged(float $lat, float $lng): void
    {
        dd($lat, $lng);
    }

    public function onBoundsChanged(float $neLat, float $neLng, float $swLat, float $swLng): void
    {
        dd($neLat, $neLng, $swLat, $swLng);
    }
```

This will give you the new position of the map. The rate at which the movements will be detected can be adjusted in ms by setting "rateLimit". Default is 1000ms:

```php
public int $rateLimit = 1000;
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Erik Sadewater](https://github.com/esadewater)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
