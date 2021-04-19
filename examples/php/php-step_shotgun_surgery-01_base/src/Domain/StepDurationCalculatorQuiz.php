<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

class StepDurationCalculatorQuiz implements StepDurationCalculator
{
    public function supports(Step $step): bool
    {
        return $step instanceof QuizStep;
    }

    public function calculate(Step $step): float
    {
        return $step->questionCount() * StepEnums::QUIZ_QUESTION_DURATION * DurationMultiplier::multiplierFor($step);
    }
}
