import StepDurationCalculator from "./StepDurationCalculator";
import VideoStep from "./VideoStep";
import Step from "./Step";
import {multiplierFor} from "./DurationMultiplier";

class StepDurationCalculatorVideo implements StepDurationCalculator {
    supports(step: Step): boolean {
        return step instanceof VideoStep;
    }

    calculate(step: VideoStep): number {
        return step.videoDuration * multiplierFor(step);
    }
}

export default StepDurationCalculatorVideo