import { formatLeadingZero } from "./numberUtils";

describe("numberUtils", () => {
    describe('formatLeadingZero', () => {
        test('with 0 - default digits', () => {
            const number = 0;
            const expected = "00";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with 0 - 3 digits', () => {
            const number = 0;
            const digits = 3;
            const expected = "000";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
        test('with 2 - default digits', () => {
            const number = 2;
            const expected = "02";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with 2 - 3 digits', () => {
            const number = 2;
            const digits = 3;
            const expected = "002";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
        test('with 42 - default digits', () => {
            const number = 42;
            const expected = "42";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with 42 - 3 digits', () => {
            const number = 42;
            const digits = 3;
            const expected = "042";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
        test('with -42 - default digits', () => {
            const number = -42;
            const expected = "42";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with -42 - 3 digits', () => {
            const number = -42;
            const digits = 3;
            const expected = "042";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
        test('with 42.1 - default digits', () => {
            const number = 42.1;
            const expected = "42";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with 42.1 - 3 digits', () => {
            const number = 42.1;
            const digits = 3;
            const expected = "042";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
        test('with -42.1 - default digits', () => {
            const number = -42.1;
            const expected = "42";
            expect(formatLeadingZero(number)).toBe(expected);
        });
        test('with -42.1 - 3 digits', () => {
            const number = -42.1;
            const digits = 3;
            const expected = "042";
            expect(formatLeadingZero(number, digits)).toBe(expected);
        });
     })
});