import { Contract } from "../../src/Domain/Contract"
import { InvalidPower } from "../../src/Domain/InvalidPower"
import { ChangeContractedPower } from "../../src/Application/ChangeContractedPower"
import { ContractRepositoryMock } from "./__mocks__/ContractRepositoryMock"
import { ContractNotFound } from "../../src/Domain/ContractNotFound"

describe('Change contracted power', () => {
    let changeContractedPower: ChangeContractedPower
    let repository: ContractRepositoryMock

    beforeEach(() => {
        repository = new ContractRepositoryMock()
        changeContractedPower = new ChangeContractedPower(repository)
    })

    test.each([
        [1150, 1725],
        [1725, 2300],
        [2300, 3450],
        [3450, 4600],
        [4600, 5750],
        [5750, 6900],
        [6900, 8050],
        [8050, 9200],
        [9200, 1150],
        [1150, 1150],
    ])(
        'should change contracted power from %pkW to %pkW',
        async (initialPower: number, newPower: number) => {
            const contractId = '1'
            const contract = new Contract(contractId, initialPower)
            repository.returnOnSearch(contract)

            await changeContractedPower.run(contractId, newPower)

            repository.assertContractSaved(contract)
            expect(contract.power).toBe(newPower)
        }
    )

    it('should throw invalid power error for not normalized power values', async () => {
        const contractId         = '1'
        const notNormalizedPower = 1234

        const changeContractedPowerForNotNormalizedPower = () => {
            const contract = new Contract(contractId, notNormalizedPower)
            repository.returnOnSearch(contract)

            changeContractedPower.run(contractId, notNormalizedPower)
        }

        await expect(changeContractedPowerForNotNormalizedPower).toThrow(InvalidPower)
    })

    it('should throw contract not found error', async () => {
        const contractId         = '1'
        const notNormalizedPower = 1234

        await expect(changeContractedPower.run(contractId, notNormalizedPower)).rejects.toBeInstanceOf(ContractNotFound)
    })
})