<?php

namespace ESadewater\LivewireMaps\Traits;

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
    }

    /**
     * @param  Collection  $markers
     * @return void
     */
    public function setMarkers(Collection $markers): void
    {
        $this->markers = $markers;
        $this->emitSelf('updatedMarkers');
    }

    /**
     * @param  mixed  $payload
     * @return void
     */
    public function onMarkerClick(mixed $payload): void
    {
    }
}
