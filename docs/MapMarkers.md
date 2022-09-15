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
