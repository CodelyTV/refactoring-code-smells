import { Contract } from "./Contract"

export interface ContractRepository {
    save(contract: Contract): Promise<void>
    search(contractId: string): Promise<Contract>
}