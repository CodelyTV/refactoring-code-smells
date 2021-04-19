<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Application;

use CodelyTv\StepShotgunSurgery\Domain\StepDurationCalculatorFactory;
use CodelyTv\StepShotgunSurgery\Domain\StepRepository;

class GetStepDuration
{
    private StepRepository $steps;

    public function __construct(StepRepository $steps)
    {
        $this->steps = $steps;
    }

    public function __invoke(string $stepId): float
    {
        $step = $this->steps->find($stepId);
        return StepDurationCalculatorFactory::build()->calculate($step);
    }
}
