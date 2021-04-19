<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

interface StepDurationCalculator
{
    public function supports(Step $step): bool;

    public function calculate(Step $step): float;
}
