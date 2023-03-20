import {expect, describe, test} from '@jest/globals';
import CartValueDecorator from '../src/calculatorLogic/CartValueDecorator';
import { ICalculatorFee } from '../src/calculatorLogic/DistanceCalculator';

const inputOutputExamples = [
  {
    cartValue: 0,
    smallOrderSurcharge: 10,
    testName: 'Should return max surcharge with cart value 0',
  },
  {
    cartValue: 5,
    smallOrderSurcharge: 5,
    testName: 'Should return surcharge 5 with cart value 5',
  },
  {
    cartValue: 10,
    smallOrderSurcharge: 0,
    testName: 'Should return 0 surcharge with cart value 10',
  },
]

describe('test class DistanceCalculator', () => {
  const mockCalculatorFee: ICalculatorFee = {calculateFee: () => 0};

  for (let i = 0; i < inputOutputExamples.length; i++) {
    const formData = {
      cartValue: inputOutputExamples[i].cartValue,
      distance: 500,
      amount: 1,
      datetime: '2011-10-05T14:48',
    }

    test(inputOutputExamples[i].testName, () => {
      let classCartValue = new CartValueDecorator(mockCalculatorFee);
      expect(classCartValue.calculateFee(formData)).toEqual(inputOutputExamples[i].smallOrderSurcharge);
    });
  }
});
