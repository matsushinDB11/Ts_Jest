export type parsedOutput = {
    numbers: number[]
    symbols: string[]
}

const formulaParser = (input: string): parsedOutput => {
    const inputArray = input.split("")
    const symbol = /[+\-*\/]/;
    const parentheses = /[()]/
    const number = /[0-9]/

    // 末尾が記号
    if (inputArray.slice(-1)[0].match(symbol)) throw RangeError("Symbols at the end");

    const output: parsedOutput = {
        numbers: [],
        symbols: []
    }
    let beginningLine_OR_afterSymbol = true;
    let numberCash = "";
    for (const str of inputArray) {
        switch (true) {
            case symbol.test(str):
                if (beginningLine_OR_afterSymbol) throw new RangeError("Negative numbers or consecutive symbols");
                output.symbols.push(str);
                beginningLine_OR_afterSymbol = true;
                if (numberCash.length > 0){
                    output.numbers.push(Number(numberCash));
                    numberCash = "";
                }
                break;
            case parentheses.test(str):
                output.symbols.push(str);
                beginningLine_OR_afterSymbol = false;
                if (numberCash.length > 0){
                    output.numbers.push(Number(numberCash));
                    numberCash = "";
                }
                break;
            case number.test(str):
                numberCash += str;
                beginningLine_OR_afterSymbol = false;
                break;
            default:
                throw new RangeError("Invalid input");
        }
    }
    if (numberCash.length > 0){
        output.numbers.push(Number(numberCash));
    }
    return output
}

export default formulaParser;
