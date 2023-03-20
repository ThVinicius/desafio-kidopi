<?php

namespace App\Services;

use App\Models\CovidStatModel;
use App\Repositories\CovidStatRepository;

class CovidStatService
{
  private $covidStatRepository;

  public function __construct(CovidStatRepository $covidStatRepository)
  {
    $this->covidStatRepository = $covidStatRepository;
  }

  public function saveCovidStats(string $country, string $searchDate)
  {
    $covidStat = new CovidStatModel;
    $covidStat->country = $country;
    $covidStat->search_date = $searchDate;

    return $this->covidStatRepository->save($covidStat);
  }

  public function getCovidStats()
  {
    return $this->covidStatRepository->get();
  }
}
