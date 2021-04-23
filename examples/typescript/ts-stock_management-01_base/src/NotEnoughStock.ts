export class NotEnoughStock extends Error {
    constructor() {
        super('Not enough stock')
    }
}