<?php

namespace ESadewater\LivewireMaps\Livewire;

use JsonSerializable;

class Marker implements JsonSerializable
{
    public float $lat;
    public float $lng;

    public mixed $payload;

    public function __construct(mixed $payload = '')
    {
        $this->lat = rand(0, 50);
        $this->lng = rand(0, 50);

        $this->payload = $payload;
    }

    public function jsonSerialize(): array
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
