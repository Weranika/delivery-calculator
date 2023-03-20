import { IForm } from '../global/interfaces';

export interface ICalculatorFee {
  calculateFee: (data: IForm) => number;
}

export default class DistanceCalculator implements ICalculatorFee {

  calculateFee({distance}: IForm): number {
    const MINIMUM_FEE_BY_DISTANCE = 1;
    const DELIVERY_DESCRITIZATION_DISTANCE = 500;

    return Math.floor((distance - 1) / DELIVERY_DESCRITIZATION_DISTANCE) + MINIMUM_FEE_BY_DISTANCE;
  }
}
