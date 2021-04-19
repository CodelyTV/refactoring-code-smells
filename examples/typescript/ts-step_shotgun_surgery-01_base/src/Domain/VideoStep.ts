import StepId from "./StepId";
import Step from "./Step";
import {STEP_TYPE_VIDEO} from "./StepEnums";

class VideoStep extends Step {
    constructor(
        stepId: StepId,
        public readonly videoDuration: number
    ) {
        super(stepId)
    }

    type(): string {
        return STEP_TYPE_VIDEO
    }
}

export default VideoStep