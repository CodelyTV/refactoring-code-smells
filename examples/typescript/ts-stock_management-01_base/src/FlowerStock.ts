import { LowStock } from "./LowStock"
import { AggregateRoot } from "./AggregateRoot"
import { NotEnoughStock } from "./NotEnoughStock"
import { OutOfStock } from "./OutOfStock"

export class FlowerStock extends AggregateRoot {

    private flowers: Array<string>

    constructor(flowers: Array<string> = []) {
        super()
        const flowerSet = new Set<string>(flowers)
        this.flowers = Array.from(flowerSet)
    }

    total() {
        return this.flowers.length
    }

    add(flowerId: string): void {
        const flowerSet = new Set<string>(this.flowers)
        flowerSet.add(flowerId)
        this.flowers = Array.from(flowerSet)
    }

    get(): string {
        if (this.flowers.length === 0) {
            throw new OutOfStock()
        }
        const currentStock = this.flowers.length

        const flowerId = this.flowers.shift()

        if (currentStock >= 50 && this.flowers.length < 50) {
            this.record(new LowStock('low flower stock'))
        }

        return flowerId
    }

    getMultiple(amount: number): Array<string> {
        if (this.flowers.length < amount) {
            throw new NotEnoughStock()
        }

        const currentStock = this.flowers.length

        const flowerIds: Array<string> = this.flowers.splice(0, amount)

        if (currentStock >= 50 && this.flowers.length < 50) {
            this.record(new LowStock(`low flower stock produced by high demand: ${amount}`))
        }

        return flowerIds
    }

    removeDeadFlowers(deadFlowers: Array<string>): void {
        const currentStock = this.flowers.length

        this.flowers = this.flowers.filter(flowerId => !deadFlowers.includes(flowerId))

        if (currentStock >= 50 && this.flowers.length < 50) {
            this.record(new LowStock(`low flower stock produced by ${deadFlowers.length} dead flowers`))
        }
    }
}