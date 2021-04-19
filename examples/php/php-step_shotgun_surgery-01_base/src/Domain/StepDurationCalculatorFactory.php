<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

class StepDurationCalculatorFactory
{
    public static function build(): StepDurationCalculator
    {
        // Remember to add the calculator!!
        return new StepDurationCalculatorChain(
            new StepDurationCalculatorVideo(),
            new StepDurationCalculatorQuiz(),
        );
    }
}
