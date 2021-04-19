<?php

declare(strict_types=1);

namespace CodelyTv\StepShotgunSurgery\Domain;

final class VideoStep extends Step
{
    private int $videoDuration;

    public function __construct(string $id, int $videoDuration)
    {
        parent::__construct($id);
        $this->videoDuration = $videoDuration;
    }

    public function type(): string
    {
        return StepEnums::STEP_TYPE_VIDEO;
    }

    public function videoDuration(): int
    {
        return $this->videoDuration;
    }
}
