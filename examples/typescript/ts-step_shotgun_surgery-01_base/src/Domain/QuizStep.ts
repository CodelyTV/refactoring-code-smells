import Step from "./Step";
import StepId from "./StepId";
import {STEP_TYPE_QUIZ} from "./StepEnums";

class QuizStep extends Step {
    constructor(
        stepId: StepId,
        public readonly totalQuestions: number
    ) {
        super(stepId);
    }

    type(): string {
        return STEP_TYPE_QUIZ
    }
}

export default QuizStep