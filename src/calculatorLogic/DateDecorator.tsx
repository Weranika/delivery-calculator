import { IForm } from '../global/interfaces';
import { ICalculatorFee } from './DistanceCalculator';

class DateDecorator implements ICalculatorFee {
  private decorated: ICalculatorFee;

  readonly FRIDAY = 5;
  readonly START_FRIDAY_RUSH_HOUR = 15;
  readonly END_FRIDAY_RUSH_HOUR = 18;
  readonly SURCHARGE_FOR_RUSH_HOURS = 1.2;

  constructor(decorated: ICalculatorFee) {
      this.decorated = decorated;
  }

  calculateFee(data: IForm): number {
    const { datetime } = data;

    let delivery_date = new Date(datetime);

    if (delivery_date.getDay() === this.FRIDAY &&
        delivery_date.getHours() >= this.START_FRIDAY_RUSH_HOUR &&
        delivery_date.getHours() <= this.END_FRIDAY_RUSH_HOUR) {
      return this.decorated.calculateFee(data) * this.SURCHARGE_FOR_RUSH_HOURS;
    }

    return this.decorated.calculateFee(data);
  }
}

export default DateDecorator;
