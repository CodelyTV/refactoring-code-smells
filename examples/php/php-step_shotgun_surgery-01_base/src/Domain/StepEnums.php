<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

final class StepEnums
{
    public const STEP_TYPE_VIDEO = 'video';
    public const STEP_TYPE_QUIZ = 'quiz';

    public const STEP_DURATION_MULTIPLIER_VIDEO = 1.1;
    public const STEP_DURATION_MULTIPLIER_QUIZ = 1.5;

    public const QUIZ_QUESTION_DURATION = 5;

    # Important: don't forget to add here the type!!
    public const STEP_TYPES = [
        self::STEP_TYPE_VIDEO,
        self::STEP_TYPE_QUIZ
    ];
}
