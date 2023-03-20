import { IForm } from '../global/interfaces';
import { ICalculatorFee } from './DistanceCalculator';

class SurchargeAmountDecorator implements ICalculatorFee {
  private decorated: ICalculatorFee;
  readonly NO_SURCHARGE_BY_AMMOUNT = 0;
  readonly MAX_ITEMS_WITHOUT_SURCHARGE = 4;
  readonly VALUE_OF_SURCHARGE_BY_AMMOUNT_FOR_ONE_ITEM = 0.5;
  readonly EXTRA_BULK = 1.2;

  constructor(decorated: ICalculatorFee) {
      this.decorated = decorated;
  }

  calculateFee(data: IForm): number {
    const { amount } = data;
    let surchargeByAmount: number = this.NO_SURCHARGE_BY_AMMOUNT;

    if (amount > this.MAX_ITEMS_WITHOUT_SURCHARGE) {
      surchargeByAmount = (amount - this.MAX_ITEMS_WITHOUT_SURCHARGE) * this.VALUE_OF_SURCHARGE_BY_AMMOUNT_FOR_ONE_ITEM;
    }
    if (amount > 12) {
      surchargeByAmount += this.EXTRA_BULK;
    }

    return this.decorated.calculateFee(data) + surchargeByAmount;
  }
}

export default SurchargeAmountDecorator;
