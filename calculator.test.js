import Calculator from './calculator';

it('Errors when input is invalid', () => {
    const principal = 400000;
    const term = '40';
    const interest = 5;
    expect(() => {
        new Calculator(principal, term, interest);
    }).toThrow(Error);
});

it('Errors when input is missing', () => {
    const principal = 400000;
    const term = 40;
    expect(() => {
        new Calculator(principal, term);
    }).toThrow(Error);
});

it('Correctly calculates values', () => {
    const principal = 400000;
    const term = 30;
    const interest = 5;
    const Mortgage = new Calculator(principal, term, interest);
    expect(Mortgage.monthlyPayment()).toEqual(2147.29);
    expect(Mortgage.totalInterest()).toEqual(373024.4);
});

it('Correctly calculates cover for just debt repayments', () => {
    const principal = 400000;
    const term = 30;
    const interest = 5;
    const Mortgage = new Calculator(principal, term, interest);
    expect(Mortgage.monthlyPayment()).toEqual(2147.29);
});
