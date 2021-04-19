import StepDurationCalculator from "./StepDurationCalculator";
import Step from "./Step";
import {STEP_TYPES} from "./StepEnums";

class StepDurationCalculatorChain implements StepDurationCalculator {
    constructor(private calculators: Array<StepDurationCalculator>) {
    }

    supports(step: Step): boolean {
        return STEP_TYPES.some(step.type);
    }

    calculate(step: Step): number {
        if (!this.supports(step)) {
            throw new Error(`Missing calculator for step type ${step.type()}`);
        }

        for (let calculator of this.calculators) {
            if (calculator.supports(step)) {
                return calculator.calculate(step);
            }
        }

        throw new Error(`Missing calculator for step type ${step.type()}`);
    }
}

export default StepDurationCalculatorChain