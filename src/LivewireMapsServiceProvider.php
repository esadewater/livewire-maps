<?php

namespace ESadewater\LivewireMaps;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use ESadewater\LivewireMaps\Commands\LivewireMapsCommand;

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
}
