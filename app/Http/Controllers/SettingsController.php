<?php

namespace App\Http\Controllers;

use App\Services\CalendarService;
use App\Services\SettingsService;

class SettingsController extends Controller
{
    public function settings(
        SettingsService $settingsService,
        CalendarService $calendarService
    ) {
        $settings = $settingsService->getDefaultSettings();

        $currentEventId = $calendarService->eventId();
        if ($currentEventId !== null && $currentEventId > 0) {
            $settings['theme'] = 'event';
        }

        return response()->json($settings);
    }
}
