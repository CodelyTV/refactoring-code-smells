import StepId from "./StepId";

abstract class Step {
    protected constructor(private readonly _id: StepId) {}

    abstract type();
}

export default Step