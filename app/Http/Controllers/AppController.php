<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    public function application()
    {
        return view('app');
    }

    public function themes()
    {
        return response()->json([
            'event' => asset('css/event.css'),
            'gewis' => asset('css/gewis.css'),
        ]);
    }
}
