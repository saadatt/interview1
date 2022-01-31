import {arrayOfNums} from './constants/constants';

export function sum(arrayOfNums) {
    return (arrayOfNums.reduce((acc, curr) => acc + curr, 0));
};
