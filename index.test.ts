

import { add } from './index';

describe('add function', () => {
    test('should add 5 + 4 to equal 9', () => {
        expect(add(5,4)).toEqual(9);
    })
})