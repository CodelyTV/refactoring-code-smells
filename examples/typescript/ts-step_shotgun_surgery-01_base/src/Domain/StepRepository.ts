import StepId from './StepId'
import Step from "./Step";

interface StepRepository {
    find(stepId: StepId): Step
}

export default StepRepository