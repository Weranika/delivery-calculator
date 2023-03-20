import {expect, describe, test} from '@jest/globals';
import SurchargeAmountDecorator from '../src/calculatorLogic/SurchargeAmountDecorator';
import { ICalculatorFee } from '../src/calculatorLogic/DistanceCalculator';

const inputOutputExamples = [
  {
    ammountOfItems: 4,
    valueOfSurcharge: 0,
    testName: 'Should return 0 surcharge with ammount of items 4',
  },
  {
    ammountOfItems: 5,
    valueOfSurcharge: 0.5,
    testName: 'Should return 0.5 surcharge with ammount of items 5',
  },
  {
    ammountOfItems: 10,
    valueOfSurcharge: 3,
    testName: 'Should return 3 surcharge with ammount of items 10',
  },
  {
    ammountOfItems: 12,
    valueOfSurcharge: 4,
    testName: 'Should return 4 surcharge with ammount of items 12',
  },
  {
    ammountOfItems: 13,
    valueOfSurcharge: 5.7,
    testName: 'Should return 5.7 surcharge with ammount of items 13',
  },
]

describe('test class DistanceCalculator', () => {
  const mockCalculatorFee: ICalculatorFee = {calculateFee: () => 0};

  for (let i = 0; i < inputOutputExamples.length; i++) {
    const formData = {
      cartValue: 10,
      distance: 500,
      amount: inputOutputExamples[i].ammountOfItems,
      datetime: '2011-10-05T14:48',
    }

    test(inputOutputExamples[i].testName, () => {
      let classCartValue = new SurchargeAmountDecorator(mockCalculatorFee);
      expect(classCartValue.calculateFee(formData)).toEqual(inputOutputExamples[i].valueOfSurcharge);
    });
  }
});
