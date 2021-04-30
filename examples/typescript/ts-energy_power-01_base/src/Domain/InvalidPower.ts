export class InvalidPower extends Error {
    constructor(public readonly power: number) {
        super(`Invalid power value: ${power}`)
    }
}