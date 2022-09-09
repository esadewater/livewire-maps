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
    //use MapMarkers;

    public Collection $features;

    public float $centerLat;

    public float $centerLng;

    public int $zoom;

    public float $neLat;

    public float $neLng;

    public float $swLat;

    public float $swLng;

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->features = Collection::empty();
    }

    /**
     * @return View
     */
    public function render(): View
    {
        return view('livewire-maps::livewire.map-view');
    }
}
