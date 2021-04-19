import GetStepDuration from '../../src/Application/GetStepDuration';
import StepId from "../../src/Domain/StepId";
import VideoStep from "../../src/Domain/VideoStep";
import QuizStep from "../../src/Domain/QuizStep";
import Step from "../../src/Domain/Step";
import StepRepository from "../../src/Domain/StepRepository";

test('should get video step duration', () => {
    const stepId = new StepId('stepId')
    const step = new VideoStep(stepId, 13)
    const stepRepository = stepRepositoryWith(step)
    const getStepDuration = new GetStepDuration(stepRepository)

    const duration = getStepDuration.execute(stepId.value())

    expect(duration).toBe(14.3)
});

test('should get quiz step duration', () => {
    const stepId = new StepId('stepId')
    const step = new QuizStep(stepId, 5)
    const stepRepository = stepRepositoryWith(step)
    const getStepDuration = new GetStepDuration(stepRepository)

    const duration = getStepDuration.execute(stepId.value())

    expect(duration).toBe(37.5)
});

function stepRepositoryWith(step: Step): StepRepository {
    return {
        find: jest.fn(() => step)
    }
}