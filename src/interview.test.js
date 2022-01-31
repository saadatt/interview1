import {sum} from './interview';

describe('test result function', () => {
    const cases = [
        {value: [5, 7, 10], expected: 22},
        {value: [4, 3, 1, 6, 7, 8], expected: 29},
        {value: [8, 8], expected: 16},
        {value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 55},
    ]
    it.each(cases)('should return %#', ({value, expected}) => {
        expect(sum(value)).toEqual(expected)
    });
    });
