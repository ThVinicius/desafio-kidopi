<?php

namespace Tests\Feature;

use Tests\TestCase;

class CovidStatTest extends TestCase
{

  public function testSaveCovidStat()
  {
    $data = [
      'country' => 'Brazil',
      'search_date' => '2022-03-17 10:00:00'
    ];

    $response = $this->postJson('/api/covid-stats', $data);

    $response->assertStatus(201)
      ->assertJson([
        'country' => 'Brazil'
      ]);
  }
}
