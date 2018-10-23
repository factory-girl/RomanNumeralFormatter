import React from 'react';
import Form from './components/Form';
import './App.css';

class RomanNumeralFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '' };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({ userInput: e.target.value });
    }

    formatToRomanNumeral(decimalNumber) {
        let romanNumeral = "";
        const numeralValues = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1
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
            <div className="App">
                <Form handleUserInput={this.handleUserInput}
                      userInput={this.state.userInput}
                      formattedNumber={this.formatToRomanNumeral(this.state.userInput)}/>
            </div>
        );
    }
}

export default RomanNumeralFormatter;