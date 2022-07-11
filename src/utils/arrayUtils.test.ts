import { shuffleArr } from "./arrayUtils";

describe("arrayUtils", () => {
  describe('shuffleArray', () => {
    test('with no elements', () => {
      const array : Array<any> = [];
      expect(shuffleArr(array)).toEqual([]);
    });
    test('with 1 element', () => {
      const array : Array<any> = [true];
      expect(shuffleArr(array)).toEqual([true]);
    });
    test('with 2 identical elements', () => {
      const array : Array<any> = [true, true];
      expect(shuffleArr(array)).toEqual([true, true]);
    });
    test('with 2 different elements', () => {
      const array : Array<any> = ["false", "true"];
      expect(shuffleArr(array).length).toEqual(array.length);
    });
    test('with 4 different elements', () => {
      const array : Array<any> = ["false", "true", true, null];
      expect(shuffleArr(array).length).toEqual(array.length);
    });
  });
});