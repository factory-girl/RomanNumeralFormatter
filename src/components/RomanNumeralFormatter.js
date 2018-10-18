import React from 'react';

class RomanNumeralFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '' };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const romanNumeral = this.formatToRomanNumeral(e.target.value);
        this.setState({ userInput: e.target.value, formattedNumber: romanNumeral });
    }

    formatToRomanNumeral(decimalNumber) {
        let romanNumeral = "";
        const numeralValues = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5
        };

        Object.keys(numeralValues).forEach(numeral => {
            symbolise(numeral, numeralValues[numeral]);
        });

        function symbolise(numeral, decimalValue) {
            if (decimalValue < 5 && Math.round(decimalNumber) > 0) {
                do {
                        romanNumeral += "I";
                        decimalNumber--;
                    } while (Math.round(decimalNumber) > 0);

            }

            if (decimalNumber/decimalValue % decimalValue < decimalValue
                && decimalNumber/decimalValue % decimalValue >= 1) {
                const numberOfTimesValueCanFactorIn = String((decimalNumber / decimalValue)).split(".", 1)[0];
                decimalNumber = decimalNumber / decimalValue;

                    for (let i = 0; i < numberOfTimesValueCanFactorIn; i++) {
                        romanNumeral += numeral;
                        decimalNumber--;
                    }
                decimalNumber = decimalNumber*decimalValue;
            }
        }

        return romanNumeral;
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.handleUserInput}
                       value={this.state.userInput}/>
                <h1>{this.state.formattedNumber}</h1>
            </div>
        );
    }
}

export default RomanNumeralFormatter;