<?php

namespace App\Http\Controllers;

use App\Http\Requests\CovidStatRequest;
use App\Services\CovidStatService;


class CovidStatController extends Controller
{
    protected $covidStatService;

    public function __construct(CovidStatService $covidStatService)
    {
        $this->covidStatService = $covidStatService;
    }

    public function save(CovidStatRequest $request)
    {
        $country = $request['country'];
        $search_date = $request['search_date'];

        $covidStat = $this->covidStatService->saveCovidStats($country, $search_date);

        return response()->json($covidStat, 201);

        return $request;
    }
}
