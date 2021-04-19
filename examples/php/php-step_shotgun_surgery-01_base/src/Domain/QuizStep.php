<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

final class QuizStep extends Step
{
    private array $questions;

    public function __construct(string $id, Question ...$questions)
    {
        parent::__construct($id);
        $this->questions = $questions;
    }

    public function type(): string
    {
        return StepEnums::STEP_TYPE_QUIZ;
    }

    public function questionCount(): int
    {
        return count($this->questions);
    }
}
