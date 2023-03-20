import DistanceCalculator from './DistanceCalculator';
import CartValueDecorator from './CartValueDecorator';
import SurchargeAmountDecorator from './SurchargeAmountDecorator';
import MaxFeeDecorator from './MaxFeeDecorator';
import DateDecorator from './DateDecorator';

let calculator = new DistanceCalculator();
calculator = new CartValueDecorator(calculator);
calculator = new SurchargeAmountDecorator(calculator);
calculator = new DateDecorator(calculator);
calculator = new MaxFeeDecorator(calculator);

export default calculator;
