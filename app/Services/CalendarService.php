<?php

namespace App\Services;

class CalendarService
{
    protected $guzzle;

    public function __construct()
    {
        $this->guzzle = new \GuzzleHttp\Client([
            'base_uri' => 'https://gewis.nl/api/events/',
            'connect_timeout' => 5,
            'timeout' => 10,
        ]);
    }

    public function eventId(): ?int
    {
        $eventId = null;

        try {
            $response = $this->guzzle->get('https://localhost/eventservice/event/current');

            $eventId = (int)$response->getBody()->getContents() ?: null;
        } catch (\Exception $e) {
            \Log::error('Could not retrieve current Event ID.');
        }

        return $eventId;
    }
}