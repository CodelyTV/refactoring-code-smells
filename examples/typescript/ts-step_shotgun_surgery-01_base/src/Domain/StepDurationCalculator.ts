import Step from "./Step";

interface StepDurationCalculator {
    supports(step: Step): boolean;
    calculate(step: Step): number;
}

export default StepDurationCalculator