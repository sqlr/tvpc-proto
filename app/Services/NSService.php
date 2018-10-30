<?php

namespace App\Services;

use Psr\Http\Message\ResponseInterface;
use SimpleXMLElement;

class NSService
{
    /** @var Client */
    protected $guzzle;

    public function __construct(array $config)
    {
        /** @var string $auth */
        $auth = sprintf('%s:%s',
            $config['username'],
            $config['password']
        );

        $this->guzzle = new \GuzzleHttp\Client([
            'base_uri' => 'https://webservices.ns.nl/',
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode($auth),
            ],
        ]);
    }

    public function departures(string $station = null): ?SimpleXMLElement
    {
        /** @var array $queryData */
        $queryData = [];
        if ($station !== null) {
            $queryData['station'] = $station;
        }

        /** @var ResponseInterface $response */
        $response = $this->guzzle->get('ns-api-avt?' . http_build_query($queryData));

        /** @var string $departuresXml */
        $departuresXml = $response->getBody()->getContents();

        return simplexml_load_string($departuresXml) ?: null;
    }
}