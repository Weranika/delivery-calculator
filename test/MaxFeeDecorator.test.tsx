import {expect, describe, test} from '@jest/globals';
import MaxFeeDecorator from '../src/calculatorLogic/MaxFeeDecorator';
import { ICalculatorFee } from '../src/calculatorLogic/DistanceCalculator';

const formData = {
  cartValue: 1,
  distance: 500,
  amount: 1,
  datetime: '2011-10-05T14:48',
}
const inputOutputExamples = [
  {
    cartValue: 10,
    feeValue: 10,
    testName: 'Should return 0 surcharge with cart value 10',
  },
  {
    cartValue: 50,
    feeValue: 15
  },
  {
    cartValue: 99,
    feeValue: 15
  },
  {
    cartValue: 100,
    feeValue: 0
  },
  {
    cartValue: 120,
    feeValue: 0
  },
]

describe('test class DistanceCalculator', () => {
  for (let i = 0; i < inputOutputExamples.length; i++) {
    const mockCalculatorFee: ICalculatorFee = {calculateFee: () => inputOutputExamples[i].cartValue};

    test('Test thet calculateFee method match expectaion input', () => {
      let classMaxFee = new MaxFeeDecorator(mockCalculatorFee);
      expect(classMaxFee.calculateFee(formData)).toEqual(inputOutputExamples[i].feeValue);
    });
  }
});
