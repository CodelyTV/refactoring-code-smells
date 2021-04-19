import StepDurationCalculator from "./StepDurationCalculator";
import StepDurationCalculatorVideo from "./StepDurationCalculatorVideo";
import StepDurationCalculatorQuiz from "./StepDurationCalculatorQuiz";
import StepDurationCalculatorChain from "./StepDurationCalculatorChain";

class StepDurationCalculatorFactory {
    static build(): StepDurationCalculator
    {
        // Remember to add the calculator!!
        return new StepDurationCalculatorChain([
            new StepDurationCalculatorVideo(),
            new StepDurationCalculatorQuiz(),
        ]);
    }
}

export default StepDurationCalculatorFactory