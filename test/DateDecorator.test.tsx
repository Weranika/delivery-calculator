import {expect, describe, test} from '@jest/globals';
import DateDecorator from '../src/calculatorLogic/DateDecorator';
import { ICalculatorFee } from '../src/calculatorLogic/DistanceCalculator';


const inputOutputExamples = [
  {
    datetime: '2023-02-09T14:48',
    valueOfSurcharge: 1,
    testName: 'Should return 1 surcharge when non friday day passed',
  },
  {
    datetime: '2023-02-17T14:48',
    valueOfSurcharge: 1,
    testName: 'Should return 1 surcharge when friday day passed but non rush hours',
  },
  {
    datetime: '2023-02-17T15:00',
    valueOfSurcharge: 1.2,
    testName: 'Should return 1.2 surcharge when friday day with rush hours start at 15:00',
  },
  {
    datetime: '2023-02-17T18:59',
    valueOfSurcharge: 1.2,
    testName: 'Should return 1.2 surcharge when friday day with rush hours ends at 18:59',
  },
  {
    datetime: '2023-02-17T19:00',
    valueOfSurcharge: 1,
    testName: 'Should return 1 surcharge when friday day passed but non rush hours at 19:00',
  },
]

describe('test class DistanceCalculator', () => {
  const mockCalculatorFee: ICalculatorFee = {calculateFee: () => 1};

  for (let i = 0; i < inputOutputExamples.length; i++) {
    const formData = {
      cartValue: 10,
      distance: 500,
      amount: 4,
      datetime: inputOutputExamples[i].datetime,
    }

    test(inputOutputExamples[i].testName, () => {
      let classCartValue = new DateDecorator(mockCalculatorFee);
      expect(classCartValue.calculateFee(formData)).toEqual(inputOutputExamples[i].valueOfSurcharge);
    });
  }
});
