<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

abstract class Step
{
    private string $id;

    public function __construct(string $id)
    {
        $this->id = $id;
    }

    public function id(): string
    {
        return $this->id;
    }

    abstract public function type(): string;
}
