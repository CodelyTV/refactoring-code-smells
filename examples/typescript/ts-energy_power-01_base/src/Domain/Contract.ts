import {InvalidPower} from "./InvalidPower";

export class Contract {
    private static validNormalizedPowers: Array<number> = [
        1150,
        1725,
        2300,
        3450,
        4600,
        5750,
        6900,
        8050,
        9200
    ]

    constructor(
        private id: string,
        private contractedPower: number
    ) {
        // ensure is valid
    }

    get power(): number {
        return this.contractedPower
    }

    public static ensurePowerIsNormalized(newPower: number) {
        if (!this.validNormalizedPowers.includes(newPower)) {
            throw new InvalidPower(newPower)
        }
    }

    public static getMinimumPowerNeeded(optimizedPower: number) {
        for (let normalizedPower of Contract.validNormalizedPowers) {
            if (optimizedPower <= normalizedPower) {
                return normalizedPower
            }
        }

        let totalValidNormalizedPowers = Contract.validNormalizedPowers.length;

        return Contract.validNormalizedPowers[totalValidNormalizedPowers - 1]
    }

    changePower(selectedPower: number): void {
        this.contractedPower = selectedPower
    }
}