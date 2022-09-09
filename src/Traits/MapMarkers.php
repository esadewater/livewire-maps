<?php

namespace ESadewater\LivewireMaps\Traits;

use ESadewater\LivewireMaps\Livewire\Marker;
use Illuminate\Support\Collection;

trait MapMarkers
{
    public bool $enableClustering = true;
    public Collection $markers;

    /**
     * @return void
     */
    public function bootMapMarkers(): void
    {
        $this->features->push('hasMapMarkers');
        $this->markers = Collection::empty();

        $this->markers->push(
            new Marker(),
            new Marker(),
            new Marker()
        );
    }

    /**
     * @param  string  $markerId
     * @return void
     */
    public function onMarkerClick(string $markerId): void
    {
        dd($markerId);
    }
}
