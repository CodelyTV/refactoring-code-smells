<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

interface StepRepository
{
    public function find(string $id): Step;
}
