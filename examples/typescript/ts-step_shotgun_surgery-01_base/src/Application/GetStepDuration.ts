import StepId from '../Domain/StepId'
import StepRepository from '../Domain/StepRepository'
import StepDurationCalculatorFactory from "../Domain/StepDurationCalculatorFactory";

class GetStepDuration {
    constructor(private repository: StepRepository) {}

    execute(stepId: string): number {
        const step = this.repository.find(new StepId(stepId))
        return StepDurationCalculatorFactory.build().calculate(step)
    }
}

export default GetStepDuration