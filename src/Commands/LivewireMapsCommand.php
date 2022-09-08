<?php

namespace ESadewater\LivewireMaps\Commands;

use Illuminate\Console\Command;

class LivewireMapsCommand extends Command
{
    public $signature = 'livewire-maps';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
