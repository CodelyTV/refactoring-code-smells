import { ContractRepository } from "../Domain/ContractRepository"
import { ContractNotFound } from "../Domain/ContractNotFound"
import { PowerOptimizer } from "../Domain/PowerOptimizer"
import {Contract} from "../Domain/Contract";

export class OptimizeContractedPower {
    constructor(
        private repository: ContractRepository,
        private optimizer: PowerOptimizer
    ) {}

    async run(contractId: string) {
        const contract = await this.repository.search(contractId)
        if (!contract) {
            throw new ContractNotFound(contractId)
        }

        const optimizedPower = this.optimizer.optimize()

        let power: number

        power = Contract.getMinimumPowerNeeded(optimizedPower);

        contract.changePower(power)

        await this.repository.save(contract)
    }
}