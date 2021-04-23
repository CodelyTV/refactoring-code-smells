export class AggregateRoot {
    private domainEvents: Array<any>

    constructor() {
        this.domainEvents = []
    }

    pullDomainEvents(): Array<any> {
        const domainEvents = this.domainEvents.slice()
        this.domainEvents = []

        return domainEvents
    }

    record(event: any): void {
        this.domainEvents.push(event)
    }
}