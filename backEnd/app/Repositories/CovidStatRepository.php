<?php

namespace App\Repositories;

use App\Models\CovidStatModel;

class CovidStatRepository
{
  public function save(CovidStatModel $covidStats)
  {
    $covidStats->save();
    return $covidStats->fresh();
  }
}
