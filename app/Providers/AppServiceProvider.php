<?php

namespace App\Providers;

use App\Services\NSService;
use App\Services\SettingsService;
use Illuminate\Support\ServiceProvider;
use Sqlr\GEWIS\GEWIS;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(NSService::class, function () {
            return new NSService(config('services.ns'));
        });

        $this->app->singleton(SettingsService::class, function () {
            // TODO Retrieve sources from config/environment
            return new SettingsService([]);
        });

        $this->app->singleton(GEWIS::class, function () {
            return new GEWIS(config('services.gewis'));
        });
    }
}
