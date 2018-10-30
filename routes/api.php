<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Settings
Route::get('settings', 'SettingsController@settings');
Route::get('themes', 'AppController@themes');

// Slides
Route::group([
    'prefix' => 'slide',
    'namespace' => 'Slides',
], function () {
    Route::get('agenda', 'GeneralController@agenda');
    Route::get('facebook', 'GeneralController@facebook');
    Route::get('infima', 'GeneralController@infima');
    Route::get('photo', 'GeneralController@photo');
    Route::get('poster', 'GeneralController@poster');

    Route::get('bac-pillory', 'BACController@pillory');
    Route::get('bac-price-list', 'BACController@priceList');

    Route::get('ns-departures', 'NSController@departures');
});

//Route::middleware('auth:api')->get('/user', function (\Illuminate\Http\Request $request) {
//    return $request->user();
//});
