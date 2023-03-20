<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use App\Services\CovidStatService;
use App\Repositories\CovidStatRepository;
use App\Models\CovidStatModel;

class CovidStatServiceTest extends TestCase
{
  private $covidStatRepositoryMock;
  private $covidStatService;

  protected function setUp(): void
  {
    parent::setUp();
    $this->covidStatRepositoryMock = $this->createMock(CovidStatRepository::class);
    $this->covidStatService = new CovidStatService($this->covidStatRepositoryMock);
  }

  public function testSaveCovidStats()
  {
    $country = 'Brazil';
    $searchDate = '2023-03-17';
    $covidStat = new CovidStatModel;
    $covidStat->country = $country;
    $covidStat->search_date = $searchDate;

    $this->covidStatRepositoryMock->expects($this->once())
      ->method('save')
      ->with($covidStat)
      ->willReturn($covidStat);

    $result = $this->covidStatService->saveCovidStats($country, $searchDate);

    $this->assertEquals($covidStat, $result);
  }

  public function testGetCovidStats()
  {
    $data = [
      'country' => 'Brazil',
      'incidence' => 1
    ];

    $this->covidStatRepositoryMock->expects($this->once())
      ->method('get')
      ->with()
      ->willReturn(array($data));

    $result = $this->covidStatService->getCovidStats();

    $this->assertEquals(array($data), $result);
  }
}
