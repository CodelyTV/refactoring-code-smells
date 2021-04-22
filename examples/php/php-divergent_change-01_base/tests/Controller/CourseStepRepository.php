<?php

declare(strict_types=1);

namespace CodelyTv\DivergentChange\Tests\Controller;

interface CourseStepRepository
{
    public function search(CourseId $id): CourseSteps;
}
