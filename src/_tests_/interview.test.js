import {sum} from '../interview';

describe('test result function', () => {
    const testCases = [
        ['for empty array returns 0', [], 0],
        ['for single-value array returns the value itself', [1], 1],
        ['for multiple-value array returns its sum', [1, 2], 3],
        ['for multiple-value array returns its sum', [5, 7, 10], 22],
    ];
    it.each(testCases)('case %#: %s', (_name, arr, exp) => {
        expect(sum(arr)).toEqual(exp);
    });
});