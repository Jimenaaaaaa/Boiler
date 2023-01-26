import { add } from "./sample";

describe('Add function', () => {
  test('When arguments are 1 + 4, the result should be 5', () => {
    const a = 1; 
    const b = 4;
    const r = add(a, b);
    const expected = 5;
    expect(r).toBe(expected) 
  })
})