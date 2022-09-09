<?php

namespace ESadewater\LivewireMaps\Traits;

use Illuminate\Support\Collection;

trait MapMarkers
{
    public Collection $markers;

    /**
     * @return void
     */
    public function bootMapMarkers(): void
    {
        $this->features->push('hasMapMarkers');
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
