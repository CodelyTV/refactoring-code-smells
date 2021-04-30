import { Contract } from "../../src/Domain/Contract"
import { ContractRepositoryMock } from "./__mocks__/ContractRepositoryMock"
import { ContractNotFound } from "../../src/Domain/ContractNotFound"
import { PowerOptimizerMock } from "./__mocks__/PowerOptimizerMock"
import { OptimizeContractedPower } from "../../src/Application/OptimizeContractedPower"

describe('Optimize contracted power', () => {
    let optimizeContractedPower: OptimizeContractedPower
    let repository: ContractRepositoryMock
    let powerOptimizer: PowerOptimizerMock

    beforeEach(() => {
        repository              = new ContractRepositoryMock()
        powerOptimizer          = new PowerOptimizerMock()
        optimizeContractedPower = new OptimizeContractedPower(repository, powerOptimizer)
    })

    test.each([
        [1150, 1150, 1150],
        [1151, 1150, 1725],
        [1725, 1150, 1725],
        [1726, 1150, 2300],
        [2300, 1725, 2300],
        [2301, 1725, 3450],
        [3450, 2300, 3450],
        [3451, 2300, 4600],
        [4600, 3450, 4600],
        [4601, 3450, 5750],
        [5750, 4600, 5750],
        [5751, 4600, 6900],
        [6900, 5750, 6900],
        [6901, 5750, 8050],
        [8050, 6900, 8050],
        [8051, 6900, 9200],
    ])(
        'when optimizer returns %pkW it should change contracted power from %pkW to %pkW',
        async (optimizedPower: number, initialPower: number, newPower: number) => {
            const contractId = '1'
            const contract = new Contract(contractId, initialPower)
            repository.returnOnSearch(contract)
            powerOptimizer.returnOnOptimize(optimizedPower)

            await optimizeContractedPower.run(contractId)

            repository.assertContractSaved(contract)
            expect(contract.power).toBe(newPower)
        }
    )

    it('should throw contract not found error', async () => {
        const contractId = '1'

        await expect(optimizeContractedPower.run(contractId)).rejects.toBeInstanceOf(ContractNotFound)
    })
})