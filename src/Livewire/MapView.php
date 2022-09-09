<?php

namespace ESadewater\LivewireMaps\Livewire;

use ESadewater\LivewireMaps\Traits\MapMarkers;
use ESadewater\LivewireMaps\Traits\MapMoveListener;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Livewire\Component;

class MapView extends Component
{
    use MapMoveListener;
    use MapMarkers;

    // Center
    public float $centerLat;
    public float $centerLng;

    // Rest
    public int $zoom;
    public string $class;
    public Collection $markers;

    /**
     * @return View
     */
    public function render(): View
    {
        return view('livewire-maps::livewire.map-view');
    }
}
