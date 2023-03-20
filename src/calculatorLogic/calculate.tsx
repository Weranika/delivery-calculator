import { IForm } from '../global/interfaces';

  function surchargeByCartValue(cartValue: number): number {
    const NO_SURCHARGE_BY_CART_VALUE = 0;
    const SMALL_ORDER_SURCHARGE = 10;

    let surchargeByCartValue: number = NO_SURCHARGE_BY_CART_VALUE;

    if (cartValue < SMALL_ORDER_SURCHARGE) {
      surchargeByCartValue = SMALL_ORDER_SURCHARGE - cartValue;
    }

    return surchargeByCartValue;
  }

  function feeByDistance(distance: number): number {
    const MINIMUM_FEE_BY_DISTANCE = 1;
    const DELIVERY_DESCRITIZATION_DISTANCE = 500;

    return Math.floor((distance - 1) / DELIVERY_DESCRITIZATION_DISTANCE) + MINIMUM_FEE_BY_DISTANCE;
  }

  function surchargeByAmount(amount: number): number {
    const NO_SURCHARGE_BY_AMMOUNT = 0;
    const MAX_ITEMS_WITHOUT_SURCHARGE = 4;
    const VALUE_OF_SURCHARGE_BY_AMMOUNT_FOR_ONE_ITEM = 0.5;
    const EXTRA_BULK = 1.2;

    let surchargeByAmount: number = NO_SURCHARGE_BY_AMMOUNT;

    if (amount > MAX_ITEMS_WITHOUT_SURCHARGE) {
      surchargeByAmount = (amount - MAX_ITEMS_WITHOUT_SURCHARGE) * VALUE_OF_SURCHARGE_BY_AMMOUNT_FOR_ONE_ITEM;
    }
    if (amount > 12) {
      surchargeByAmount += EXTRA_BULK;
    }

    return surchargeByAmount;
  }

  function feeByDate(datetime: string, totalFee: number): number {
    const FRIDAY = 5;
    const START_FRIDAY_RUSH_HOUR = 15;
    const END_FRIDAY_RUSH_HOUR = 19;
    const SURCHARGE_FOR_RUSH_HOURS = 1.2;

    let delivery_date = new Date(datetime);

    if (delivery_date.getDay() === FRIDAY &&
        delivery_date.getHours() >= START_FRIDAY_RUSH_HOUR &&
        delivery_date.getHours() <= END_FRIDAY_RUSH_HOUR) {
      return totalFee * SURCHARGE_FOR_RUSH_HOURS;
    }

    return totalFee;
  }

  function validateMaxFee(totalFee: number): number {
    const MAX_TOTAL_FEE = 15;
    const VALUE_WITHOUT_FEE = 100;

    if (totalFee >= VALUE_WITHOUT_FEE) {
      return 0;
    }

    if (totalFee >= MAX_TOTAL_FEE) {
      return MAX_TOTAL_FEE;
    }

    return Math.ceil((totalFee)*100)/100;
  }

  export function calculatingFee(data: IForm): number {
    const { cartValue, distance, amount, datetime } = data;

    surchargeByCartValue(cartValue);
    feeByDistance(distance);
    surchargeByAmount(amount);

    let totalFee = surchargeByCartValue(cartValue) + feeByDistance(distance) + surchargeByAmount(amount);

    totalFee = feeByDate(datetime, totalFee);

    return validateMaxFee(totalFee);
  }
