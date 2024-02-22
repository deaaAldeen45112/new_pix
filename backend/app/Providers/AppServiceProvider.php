<?php

namespace App\Providers;

use App\Models\OptionProductProperty;
use App\Repository\OptionProductPropertyRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ProductRepository::class, function ($app) {
            return new ProductRepository(new Product);
        });

        $this->app->bind(CategoryRepository::class, function ($app) {
            return new CategoryRepository(new Category);
        });
        $this->app->bind(OptionProductPropertyRepository::class, function ($app) {
            return new OptionProductPropertyRepository(new OptionProductProperty);
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
