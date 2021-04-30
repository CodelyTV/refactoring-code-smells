import { SignUp } from "../../src/Application/SignUp"
import { Contract } from "../../src/Domain/Contract"
import { InvalidPower } from "../../src/Domain/InvalidPower"
import { ContractRepositoryMock } from "./__mocks__/ContractRepositoryMock"

describe('SignUp', () => {
    let signUp: SignUp
    let repository: ContractRepositoryMock

    beforeEach(() => {
        repository = new ContractRepositoryMock()
        signUp     = new SignUp(repository)
    })

    test.each([
        [1150],
        [1725],
        [2300],
        [3450],
        [4600],
        [5750],
        [6900],
        [8050],
        [9200]
    ])(
        'should create a %pkW electricity contract',
        async (power: number) => {
            const contractId = '1'

            await signUp.run(contractId, power)

            const expectedContract = new Contract(contractId, power)
            repository.assertContractSaved(expectedContract)
        }
    )

    it('should throw invalid power error for not normalized power values', async () => {
        const contractId         = '1'
        const notNormalizedPower = 1234

        await expect(signUp.run(contractId, notNormalizedPower)).rejects.toBeInstanceOf(InvalidPower)
    })
})