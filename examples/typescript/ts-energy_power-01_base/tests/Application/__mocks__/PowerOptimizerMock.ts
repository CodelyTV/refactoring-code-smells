import { PowerOptimizer } from "../../../src/Domain/PowerOptimizer"

export class PowerOptimizerMock implements PowerOptimizer {
    private mockOptimize = jest.fn()
    private optimizedPower: number = null

    optimize(): number {
        this.mockOptimize()
        return this.optimizedPower
    }
    returnOnOptimize(optimizedPower: number): void {
        this.optimizedPower = optimizedPower
    }
}