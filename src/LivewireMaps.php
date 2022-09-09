<?php

namespace ESadewater\LivewireMaps;

use Illuminate\View\View;

class LivewireMaps
{
    public static function renderScripts(): View
    {
        return view('livewire-maps::scripts');
    }
}
