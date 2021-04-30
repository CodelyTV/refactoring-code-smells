import {ContractRepository} from "../Domain/ContractRepository"
import {ContractNotFound} from "../Domain/ContractNotFound"

export class ChangeContractedPower {
    constructor(private repository: ContractRepository) {
    }

    async run(contractId: string, newPower: number) {
        const contract = await this.repository.search(contractId)
        if (!contract) {
            throw new ContractNotFound(contractId)
        }

        contract.changePower(newPower)

        await this.repository.save(contract)
    }
}