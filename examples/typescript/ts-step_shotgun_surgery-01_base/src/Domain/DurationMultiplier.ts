import Step from "./Step";
import * as StepEnums from "./StepEnums";

export function multiplierFor(step: Step): number {
    if (step.type() === StepEnums.STEP_TYPE_VIDEO) {
        return StepEnums.STEP_DURATION_MULTIPLIER_VIDEO;
    }

    if (step.type() === StepEnums.STEP_TYPE_QUIZ) {
        return StepEnums.STEP_DURATION_MULTIPLIER_QUIZ;
    }

    return 1.0;
}
