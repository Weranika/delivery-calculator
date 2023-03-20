import {expect, describe, test} from '@jest/globals';
import calculator from '../src/calculatorLogic/FullCalculator';

const inputOutputExamples = [
  {
    input: {
      cartValue: 1,
      distance: 499,
      amount: 1,
      datetime: '2011-10-05T14:48',
    },
    output: 10
  },
  {
    input: {
      cartValue: 5,
      distance: 1501,
      amount: 5,
      datetime: '2023-02-17T18:59',
    },
    output: 11.4
  },
  {
    input: {
      cartValue: 20,
      distance: 3500,
      amount: 14,
      datetime: '2023-02-17T18:59',
    },
    output: 15
  }
]

describe('test class DistanceCalculator', () => {
  for (let i = 0; i < inputOutputExamples.length; i++) {
    test('Test thet calculateFee method match expectaion input', () => {
      expect(calculator.calculateFee(inputOutputExamples[i].input)).toEqual(inputOutputExamples[i].output);
    });
  }
});
