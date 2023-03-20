<?php

namespace App\Repositories;

use App\Models\CovidStatModel;
use Illuminate\Support\Facades\DB;

class CovidStatRepository
{
  public function save(CovidStatModel $covidStats)
  {
    $covidStats->save();
    return $covidStats->fresh();
  }

  public function get()
  {
    return DB::table("covid_stats")
      ->selectRaw('country, count(*) AS incidence')
      ->groupBy("country")
      ->get();
  }
}
