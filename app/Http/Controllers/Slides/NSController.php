<?php

namespace App\Http\Controllers\Slides;

use App\Http\Controllers\Controller;
use App\Services\NSService;
use SimpleXMLElement;

class NSController extends Controller
{
    const STATION = 'eindhoven';

    public function departures(NSService $nsService)
    {
        /** @var SimpleXMLElement $departuresXml */
        $departuresXml = $nsService->departures(self::STATION);

        $departures = [];
        foreach ($departuresXml->VertrekkendeTrein as $departure) {
            /**
             * "RitNummer": "3565"
             * "VertrekTijd": "2018-06-24T19:19:00+0200"
             * "EindBestemming": "Venlo"
             * "TreinSoort": "Intercity"
             * "RouteTekst": "Helmond"
             * "Vervoerder": "NS"
             * "VertrekSpoor": "2"
             */
            $departures[] = [
                'id' => (int)$departure->RitNummer,
                'time' => (string)$departure->VertrekTijd,
                'destination' => (string)$departure->EindBestemming,
                'type' => (string)$departure->TreinSoort,
                'route' => (string)$departure->RouteTekst ?: null,
            ];
        }

        return response()->json($departures);
    }
}
