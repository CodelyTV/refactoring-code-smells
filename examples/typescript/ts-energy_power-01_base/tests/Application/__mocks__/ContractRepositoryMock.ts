import { ContractRepository } from "../../../src/Domain/ContractRepository"
import {Contract} from "../../../src/Domain/Contract"

export class ContractRepositoryMock implements ContractRepository {
    private mockSave = jest.fn()
    private mockSearch = jest.fn()
    private contract: Contract = null

    async save(contract: Contract): Promise<void> {
        return this.mockSave(contract)
    }

    async search(contractId: string): Promise<Contract> {
        this.mockSearch()
        return this.contract
    }

    returnOnSearch(contract: Contract): void {
        this.contract = contract
    }

    assertContractSaved(contract: Contract): void {
        expect(this.mockSave.mock.calls[0][0]).toEqual(contract)
    }
}