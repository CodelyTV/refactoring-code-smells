export class ContractNotFound extends Error {
    constructor(public readonly contractId: string) {
        super(`Contract of id "${contractId}" not found`)
    }
}