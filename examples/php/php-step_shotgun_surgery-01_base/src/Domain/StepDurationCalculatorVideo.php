<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

class StepDurationCalculatorVideo implements StepDurationCalculator
{
    public function supports(Step $step): bool
    {
        return $step instanceof VideoStep;
    }

    public function calculate(Step $step): float
    {
        return $step->videoDuration() * DurationMultiplier::multiplierFor($step);
    }
}
