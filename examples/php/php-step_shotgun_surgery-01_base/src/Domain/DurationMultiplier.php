<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

class DurationMultiplier
{
    public static function multiplierFor(Step $step): float
    {
        if ($step->type() === StepEnums::STEP_TYPE_VIDEO) {
            return StepEnums::STEP_DURATION_MULTIPLIER_VIDEO;
        }

        if ($step->type() === StepEnums::STEP_TYPE_QUIZ) {
            return StepEnums::STEP_DURATION_MULTIPLIER_QUIZ;
        }

        return 1.0;
    }
}
