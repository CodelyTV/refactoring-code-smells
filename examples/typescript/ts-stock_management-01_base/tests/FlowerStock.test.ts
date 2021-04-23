import { FlowerStock } from "../src/FlowerStock"
import { LowStock } from "../src/LowStock"
import { NotEnoughStock } from "../src/NotEnoughStock"
import { OutOfStock } from "../src/OutOfStock"

describe('flower stock management', () => {

    it('should add a flower to the stock', () => {
        const stockFlowerIds = ['1', '2']
        const stock = new FlowerStock(stockFlowerIds)

        stock.add('3')

        expect(stock.total()).toBe(3)
    })

    it('should add the same flower multiple times', () => {
        const stock = new FlowerStock()

        stock.add('3')
        stock.add('3')

        expect(stock.total()).toBe(1)
    })

    it('get a single flower from the stock', () => {
        const flowerIds = ['1', '2']
        const stock = new FlowerStock(flowerIds)

        const flowerId = stock.get()

        expect(flowerId).toContain('1')
        expect(stock.total()).toBe(1)
    })

    it('should reach low stock when getting a single flower from a stock of 50', () => {
        const stockFlowerIds = makeFlowerIds(50)
        const stock = new FlowerStock(stockFlowerIds)

        stock.get()

        const domainEvents = stock.pullDomainEvents()
        expect(domainEvents.length).toBe(1)
        const lowStockEvent = domainEvents[0] as LowStock
        expect(lowStockEvent.reason).toBe('low flower stock')
    })

    it('should not reach low stock when getting a single flower from a stock greater than 50', () => {
        const flowerIds = makeFlowerIds(51)
        const stock = new FlowerStock(flowerIds)

        stock.get()

        expect(stock.pullDomainEvents().length).toBe(0)
    })

    it('should throw an error when trying to get a single flower from an empty stock', () => {
        const stock = new FlowerStock()

        expect(() => stock.get()).toThrow(OutOfStock)
    })

    it('should get multiple flowers from the stock', () => {
        const stockFlowerIds = ['1', '2', '3']
        const stock = new FlowerStock(stockFlowerIds)

        const flowerIds = stock.getMultiple(2)

        expect(flowerIds).toEqual(['1', '2'])
        expect(stock.total()).toBe(1)
    })

    it('should reach low stock when getting multiple flowers and the limit of 50 is exceeded', () => {
        const lowStockLevel = 50
        const unitsToLowStock = 5
        const unitsToGetFromTheStock = 6
        const totalStock = lowStockLevel + unitsToLowStock
        const stockFlowerIds = makeFlowerIds(totalStock)
        const stock = new FlowerStock(stockFlowerIds)

        stock.getMultiple(unitsToGetFromTheStock)

        const domainEvents = stock.pullDomainEvents()
        expect(domainEvents.length).toBe(1)
        const lowStockEvent = domainEvents[0] as LowStock
        expect(lowStockEvent.reason).toBe('low flower stock produced by high demand: 6')
    })

    it('should not reach low stock when getting multiple flowers and the limit of 50 is not exceeded', () => {
        const lowStockLimit = 50
        const unitsToLowStock = 5
        const unitsToGetFromTheStock = 5
        const totalStock = lowStockLimit + unitsToLowStock
        const flowerIds = makeFlowerIds(totalStock)
        const stock = new FlowerStock(flowerIds)

        stock.getMultiple(unitsToGetFromTheStock)

        expect(stock.pullDomainEvents().length).toBe(0)
    })

    it('should get a multiple flowers from an empty stock', () => {
        const stock = new FlowerStock()

        expect(() => stock.getMultiple(2)).toThrow(NotEnoughStock)
    })

    it('remove dead flowers from the stock', () => {
        const stockFlowerIds = ['1', '2', '3']
        const stock = new FlowerStock(stockFlowerIds)

        const deadFlowerIds = ['1', '3']
        stock.removeDeadFlowers(deadFlowerIds)

        expect(stock.total()).toBe(1)
        const aliveFlower = '2'
        expect(stock.get()).toBe(aliveFlower)
    })


    it('should reach low stock when removing dead flowers and the limit of 50 is exceeded', () => {
        const lowStockLevel = 50
        const unitsToLowStock = 5
        const totalDeadFlowers = 6
        const totalStock = lowStockLevel + unitsToLowStock
        const stockFlowerIds = makeFlowerIds(totalStock)
        const stock = new FlowerStock(stockFlowerIds)

        const deadFlowers = makeFlowerIds(totalDeadFlowers)
        stock.removeDeadFlowers(deadFlowers)

        const domainEvents = stock.pullDomainEvents()
        expect(domainEvents.length).toBe(1)
        const lowStockEvent = domainEvents[0] as LowStock
        expect(lowStockEvent.reason).toBe('low flower stock produced by 6 dead flowers')
    })

    it('should not reach low stock when removing flowers and the limit of 50 is not exceeded', () => {
        const lowStockLimit = 50
        const unitsToLowStock = 5
        const totalDeadFlowers = 5
        const totalStock = lowStockLimit + unitsToLowStock
        const flowerIds = makeFlowerIds(totalStock)
        const stock = new FlowerStock(flowerIds)

        const deadFlowers = makeFlowerIds(totalDeadFlowers)
        stock.removeDeadFlowers(deadFlowers)

        expect(stock.pullDomainEvents().length).toBe(0)
    })

    function makeFlowerIds(amount: number) {
        return Array<string>(amount).fill('1').map((x, y) => (x + y) as string)
    }
})
