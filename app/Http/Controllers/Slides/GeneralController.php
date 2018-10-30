<?php

namespace App\Http\Controllers\Slides;

use App\Http\Controllers\Controller;
use App\Services\InfimaService;
use Sqlr\GEWIS\Exceptions\InvalidKey;
use Sqlr\GEWIS\Exceptions\ServiceUnavailable;
use Sqlr\GEWIS\GEWIS;
use Sqlr\GEWIS\Model\Activity;

class GeneralController extends Controller
{
    /**
     * @param GEWIS $gewis
     * @return \Illuminate\Http\JsonResponse
     * @throws InvalidKey
     * @throws ServiceUnavailable
     */
    public function agenda(GEWIS $gewis)
    {
        // Get activities from GEWIS
        $activities = $gewis->activityList();
        if (empty($activities)) {
            return abort(500);
        }

        // Filter stuff like food lists
        $activities = array_filter($activities, function (Activity $activity) {
            return !$activity->isFood;
        });

        // Prepare data for response
        $activities = array_map(function (Activity $activity) {
            return [
                'id' => $activity->id,
                'name' => $activity->nameEn ?? $activity->name,
                'location' => $activity->locationEn ?? $activity->location,
                'costs' => $activity->costsEn ?? $activity->costs,
                'beginTime' => optional($activity->beginTime)->toDateTimeString(),
                'endTime' => optional($activity->endTime)->toDateTimeString(),
            ];
        }, $activities);

        $activities = array_values($activities);

        // Return data
        return response()->json($activities);
    }

    public function facebook()
    {
        return response()->json([
            'facebook' => 'data',
        ]);
    }

    public function photo()
    {
        return response()->json([
            'photo' => 'data',
        ]);
    }

    public function poster()
    {
        return response()->json([
            'poster' => 'data',
        ]);
    }
}
