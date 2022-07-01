// Define a class for grouping together the calculation behaviour
export default class Mortgage {
    // Arguments for the three variables needed
    constructor(principal, years, interestRate) {
        // Validate inputs
        this.validateInputs(principal, years, interestRate);
        // The principal is the total sum that is borrowed
        this.principal = principal;
        // The number repayments is calculated from the term of the mortgage in years.
        this.numberOfPayments = years * 12;
        // The monthly rate is calculated from the annual rate, given in the form of an integer.
        this.monthlyRate = interestRate / 1200;
    }

    // Returns a rounded float of the monthly payment due. Uses formula:
    //     P * i(1 + i)^n
    //     ______________
    //     (1 + i)^n – 1
    monthlyPayment() {
        // Calculate the numerator
        const n =
            this.principal *
            this.monthlyRate *
            Math.pow(1 + this.monthlyRate, this.numberOfPayments);
        // Calculate the denominator
        const d = Math.pow(1 + this.monthlyRate, this.numberOfPayments) - 1;
        // Return a rounded float.
        return this.format(n / d);
    }

    // Returns a rounded float for the total dept of the mortgage.
    totalDebt() {
        // Calcualted my multiplying the monthly payments by the term
        return this.monthlyPayment() * this.numberOfPayments;
    }

    // Returns a rounded float for the total interest payable for the mortgage
    totalInterest() {
        // Calculated by payable - total borrowed.
        return this.format(this.totalDebt() - this.principal);
    }

    // Utility function for rounding decimals.
    format(decimal) {
        return Math.round(decimal * 100) / 100;
    }

    validateInputs(principal, years, interestRate) {
        // Validate all inputs are integers
        if (
            !Number.isInteger(principal) ||
            !Number.isInteger(years) ||
            !Number.isInteger(interestRate)
        ) {
            throw new Error('All inputs must be integers');
        } else if (principal < 1) {
            // Validate principal is positive integer
            throw new Error('Principal must be a positive integer');
        } else if (years < 1) {
            // Validate mortgage term is positive integer
            throw new Error('Mortgage term must be a positive integer');
        } else if (interestRate < 0 || interestRate > 100) {
            // Validate interest rate is positive integer
            throw new Error('Interest rate must be an integer between 0 and 100');
        }
    }
}
