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
