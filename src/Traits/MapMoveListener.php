<?php

namespace ESadewater\LivewireMaps\Traits;

use ESadewater\LivewireMaps\Livewire\Marker;

trait MapMoveListener
{
    public bool $hasMapMoveListener = true;

    // Bounds
    public float $neLat;
    public float $neLng;
    public float $swLat;
    public float $swLng;

    /**
     * @param float $lat
     * @param float $lng
     * @return void
     */
    public function onCenterChanged(float $lat, float $lng): void
    {
        $this->centerLat = $lat;
        $this->centerLng = $lng;
    }

    /**
     * @param float $neLat
     * @param float $neLng
     * @param float $swLat
     * @param float $swLng
     * @return void
     */
    public function onBoundsChanged(float $neLat, float $neLng, float $swLat, float $swLng): void
    {
        $this->neLat = $neLat;
        $this->neLng = $neLng;
        $this->swLat = $swLat;
        $this->swLng = $swLng;

        $this->markers = collect([
            new Marker(),
            new Marker()
        ]);
        $this->emit('updatedMarkers');
    }
}
