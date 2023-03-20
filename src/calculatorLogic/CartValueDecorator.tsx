import { IForm } from '../global/interfaces';
import { ICalculatorFee } from './DistanceCalculator';

class CartValueDecorator implements ICalculatorFee {
  private decorated: ICalculatorFee;
  readonly NO_SURCHARGE_BY_CART_VALUE = 0;
  readonly SMALL_ORDER_SURCHARGE = 10;

  constructor(decorated: ICalculatorFee) {
      this.decorated = decorated;
  }

  calculateFee(data: IForm): number {
    const { cartValue } = data;

    let surchargeByCartValue: number = this.NO_SURCHARGE_BY_CART_VALUE;

    if (cartValue < this.SMALL_ORDER_SURCHARGE) {
      surchargeByCartValue = this.SMALL_ORDER_SURCHARGE - cartValue;
    }
    return this.decorated.calculateFee(data) + surchargeByCartValue;
  }
}

export default CartValueDecorator;
