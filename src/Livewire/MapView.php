<?php

namespace ESadewater\LivewireMaps\Livewire;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Livewire\Component;

class MapView extends Component
{
    public Collection $features;

    public float $centerLat;

    public float $centerLng;

    public int $zoom;

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
