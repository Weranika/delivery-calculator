import { IForm } from '../global/interfaces';
import { ICalculatorFee } from './DistanceCalculator';

class MaxFeeDecorator implements ICalculatorFee {
  private decorated: ICalculatorFee;
  readonly MAX_TOTAL_FEE = 15;
  readonly VALUE_WITHOUT_FEE = 100;

  constructor(decorated: ICalculatorFee) {
      this.decorated = decorated;
  }

  calculateFee(data: IForm): number {
    const totalFee = this.decorated.calculateFee(data);
    if (totalFee >= this.VALUE_WITHOUT_FEE) {
      return 0;
    }

    if (totalFee >= this.MAX_TOTAL_FEE) {
      return this.MAX_TOTAL_FEE;
    }

    return Math.ceil((totalFee)*100)/100;
  }
}

export default MaxFeeDecorator;
