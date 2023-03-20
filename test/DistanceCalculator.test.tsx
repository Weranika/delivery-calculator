import {expect, describe, test} from '@jest/globals';
import DistanceCalculator from '../src/calculatorLogic/DistanceCalculator';

const inputOutputExamples = [
  {
    distance: 499,
    valueOfFee: 1,
    testName: 'Should return fee for delivery equal 1 when distance 499',
  },
  {
    distance: 500,
    valueOfFee: 1,
    testName: 'Should return fee for delivery equal 1 when distance 500',
  },
  {
    distance: 501,
    valueOfFee: 2,
    testName: 'Should return fee for delivery equal 2 when distance 501',
  },
  {
    distance: 1499,
    valueOfFee: 3,
    testName: 'Should return fee for delivery equal 3 when distance 1499',
  },
  {
    distance: 1500,
    valueOfFee: 3,
    testName: 'Should return fee for delivery equal 3 when distance 1500',
  },
  {
    distance: 1501,
    valueOfFee: 4,
    testName: 'Should return fee for delivery equal 4 when distance 1501',
  }
]

describe('test class DistanceCalculator', () => {
  for (let i = 0; i < inputOutputExamples.length; i++) {
    test(inputOutputExamples[i].testName, () => {
      let classDist = new DistanceCalculator();
      const formData = {
        cartValue: 1,
        distance: inputOutputExamples[i].distance,
        amount: 4,
        datetime: '2023-02-17T14:48',
      };

      expect(classDist.calculateFee(formData)).toEqual(inputOutputExamples[i].valueOfFee);
    });
  }
});
