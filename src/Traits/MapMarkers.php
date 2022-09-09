<?php

namespace ESadewater\LivewireMaps\Traits;

trait MapMarkers
{
    public bool $hasMapMarkers = true;

    /**
     * @param string $markerId
     * @return void
     */
    public function onMarkerClick(string $markerId): void
    {
        dd($markerId);
    }
}
