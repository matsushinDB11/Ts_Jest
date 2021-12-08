type parsedOutput = {
    numbers: number[]
    symbols: string[]
}

const formulaParser = (input: string): parsedOutput => {
    const inputArray = input.split("")
    const symbol = /[+\-*\/()]/;
    const number = /[0-9]/
    const output: parsedOutput = {
        numbers: [],
        symbols: []
    }
    let beginningLine_OR_afterSymbol = true;
    let numberCash = "";
    for (const str of inputArray) {
        switch (true) {
            case symbol.test(str):
                if (beginningLine_OR_afterSymbol) throw new RangeError("入力値が無効");
                output.symbols.push(str);
                beginningLine_OR_afterSymbol = true;
                if (numberCash.length > 0) output.numbers.push(Number(numberCash));
                break;
            case number.test(str):
                numberCash += str;
                beginningLine_OR_afterSymbol = false;
                break;
            default:
                throw new RangeError("入力値が無効");
        }
    }
    return output
}
