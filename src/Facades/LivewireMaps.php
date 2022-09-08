<?php

namespace ESadewater\LivewireMaps\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \ESadewater\LivewireMaps\LivewireMaps
 */
class LivewireMaps extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \ESadewater\LivewireMaps\LivewireMaps::class;
    }
}
