<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

use RuntimeException;

class StepDurationCalculatorChain implements StepDurationCalculator
{
    /** @var StepDurationCalculator[] */
    private array $calculators;

    public function __construct(StepDurationCalculator ...$calculators)
    {
        $this->calculators = $calculators;
    }

    public function supports(Step $step): bool
    {
        return in_array($step->type(), StepEnums::STEP_TYPES);
    }

    public function calculate(Step $step): float
    {
        if (!$this->supports($step)) {
            throw new RuntimeException("Missing calculator for step type {$step->type()}");
        }

        foreach ($this->calculators as $calculator) {
            if ($calculator->supports($step)) {
                return $calculator->calculate($step);
            }
        }

        throw new RuntimeException("Missing calculator for step type {$step->type()}");
    }
}
