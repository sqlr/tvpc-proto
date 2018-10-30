<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>

    {{-- Functional meta tags --}}
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=1920,height=1080"/>

    {{-- Branding --}}
    <title>{{ config('app.name') }}</title>
    <meta name="theme-color" content="#ccaa77"/>

    {{-- Scripts --}}
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <script type="text/javascript" src="{{ asset('js/app.js') }}" defer></script>

    {{-- Styles --}}
    <link rel="stylesheet" type="text/css" href="{{ asset('css/gewis.css') }}" id="theme"/>

</head>
<body>

<div id="app"></div>

</body>
</html>
