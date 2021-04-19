import StepDurationCalculator from "./StepDurationCalculator";
import QuizStep from "./QuizStep";
import Step from "./Step";
import {multiplierFor} from "./DurationMultiplier";
import {QUIZ_QUESTION_DURATION} from "./StepEnums";

class StepDurationCalculatorQuiz implements StepDurationCalculator {
    supports(step: Step): boolean {
        return step instanceof QuizStep;
    }

    calculate(step: QuizStep): number {
        return step.totalQuestions * QUIZ_QUESTION_DURATION * multiplierFor(step);
    }
}

export default StepDurationCalculatorQuiz