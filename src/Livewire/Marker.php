<?php

namespace ESadewater\LivewireMaps\Livewire;

use JsonSerializable;

class Marker implements JsonSerializable
{
    public float $lat;

    public float $lng;

    public function __construct()
    {
        $this->lat = rand(0, 50);
        $this->lng = rand(0, 50);
    }

    public function jsonSerialize(): mixed
    {
        $properties = get_object_vars($this);

        $properties['position'] = [
            'lat' => $this->lat,
            'lng' => $this->lng,
        ];
        unset($properties['lat'], $properties['lng']);

        return $properties;
    }
}
