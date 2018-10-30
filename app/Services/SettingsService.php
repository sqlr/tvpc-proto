<?php

namespace App\Services;

class SettingsService
{
    /** @var string[] */
    protected $sources;

    public function __construct(array $sources)
    {
        $this->sources = $sources;
    }

    public function getDefaultSettings(): array
    {
        return [
            'default_timeout' => 30,
            'slides' => [
                [
                    'type' => 'logo',
                ],
                [
                    'type' => 'agenda',
                ],
//                [
//                    'type' => 'photo',
//                ],
//                [
//                    'type' => 'poster',
//                ],
                [
                    'type' => 'ns-departures',
                ],
            ],
        ];
    }
}