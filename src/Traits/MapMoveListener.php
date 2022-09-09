<?php

namespace ESadewater\LivewireMaps\Traits;

trait MapMoveListener
{
    public int $rateLimit = 1000;

    /**
     * @return void
     */
    public function bootMapMoveListener(): void
    {
        $this->features->push('hasMapMoveListener');
    }

    /**
     * @param  float  $centerLat
     * @param  float  $centerLng
     * @param  float  $neLat
     * @param  float  $neLng
     * @param  float  $swLat
     * @param  float  $swLng
     * @return void
     */
    public function onMapMoved(float $centerLat, float $centerLng, float $neLat, float $neLng, float $swLat, float $swLng): void
    {
        $this->onCenterChanged($centerLat, $centerLng);
        $this->onBoundsChanged($neLat, $neLng, $swLat, $swLng);
    }

    /**
     * @param  float  $lat
     * @param  float  $lng
     * @return void
     */
    public function onCenterChanged(float $lat, float $lng): void
    {
    }

    /**
     * @param  float  $neLat
     * @param  float  $neLng
     * @param  float  $swLat
     * @param  float  $swLng
     * @return void
     */
    public function onBoundsChanged(float $neLat, float $neLng, float $swLat, float $swLng): void
    {
    }
}
