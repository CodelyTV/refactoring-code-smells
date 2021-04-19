<?php

declare(strict_types = 1);

namespace CodelyTv\StepShotgunSurgery\Tests\Application;

use CodelyTv\StepShotgunSurgery\Application\GetStepDuration;
use CodelyTv\StepShotgunSurgery\Domain\Question;
use CodelyTv\StepShotgunSurgery\Domain\QuizStep;
use CodelyTv\StepShotgunSurgery\Domain\Step;
use CodelyTv\StepShotgunSurgery\Domain\StepRepository;
use CodelyTv\StepShotgunSurgery\Domain\VideoStep;
use PHPUnit\Framework\TestCase;

final class GetStepDurationTest extends TestCase
{
    private StepRepository $stepRepository;
    private GetStepDuration $getStepDuration;

    protected function setUp(): void
    {
        $this->stepRepository = $this->createMock(StepRepository::class);
        $this->getStepDuration = new GetStepDuration($this->stepRepository);
    }

    /** @test */
    public function shouldReturnVideoStepDuration(): void
    {
        $videoStep = new VideoStep('videoId', 10);
        $this->givenStepRepositoryHas($videoStep);

        $duration = ($this->getStepDuration)('videoId');

        self::assertSame(11.0, $duration);
    }

    /** @test */
    public function shouldReturnQuizStepDuration(): void
    {
        $questions = [
            new Question(),
            new Question(),
        ];
        $quizStep = new QuizStep('videoId', ...$questions);
        $this->givenStepRepositoryHas($quizStep);

        $duration = ($this->getStepDuration)('videoId');

        self::assertSame(15.0, $duration);
    }

    public function givenStepRepositoryHas(Step $step): void
    {
        $this->stepRepository
            ->method('find')
            ->willReturn($step);
    }
}
