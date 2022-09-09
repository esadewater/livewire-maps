<?php

namespace ESadewater\LivewireMaps;

use ESadewater\LivewireMaps\Livewire\MapView;
use Illuminate\Support\Facades\Blade;
use Livewire\Livewire;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class LivewireMapsServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('livewire-maps')
            ->hasConfigFile()
            ->hasViews()
            ->hasAssets();
    }

    public function bootingPackage()
    {
        parent::bootingPackage();

        Livewire::component('map-view', MapView::class);
        Blade::directive('livewireMapsScripts', function () {
            return '{!! ESadewater\LivewireMaps\LivewireMaps::renderScripts() !!}';
        });
    }
}
