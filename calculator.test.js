import Calculator from './calculator';

// Test that it should throw an error is inputs are not all integers
it('Errors when input is invalid', () => {
    const principal = 400000;
    const term = '40';
    const interest = 5;
    expect(() => {
        new Calculator(principal, term, interest);
    }).toThrow(Error);
});

// Test that it should throw an error if an input is missing
it('Errors when input is missing', () => {
    const principal = 400000;
    const term = 40;
    expect(() => {
        new Calculator(principal, term);
    }).toThrow(Error);
});

// Test that corectly calculates values
it('Correctly calculates values', () => {
    const principal = 400000;
    const term = 30;
    const interest = 5;
    const Mortgage = new Calculator(principal, term, interest);
    expect(Mortgage.monthlyPayment()).toEqual(2147.29);
    expect(Mortgage.totalInterest()).toEqual(373024.4);
    expect(Mortgage.totalDebt()).toEqual(773024.4);
});
