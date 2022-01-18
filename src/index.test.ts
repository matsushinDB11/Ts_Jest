import formulaParser, {parsedOutput} from "./index";

test('plus test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('2+3')).toStrictEqual(data);
})

test('minus test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['-']
    }
    expect<parsedOutput>(formulaParser('2-3')).toStrictEqual(data);
})

test('two digit', ()=> {
    const data: parsedOutput = {
        numbers: [23, 98],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('23+98')).toStrictEqual(data);
})

test('parentheses', () => {
    const data: parsedOutput = {
        numbers: [3, 2, 1],
        symbols: ['*', '(', '+', ')']
    }
    expect<parsedOutput>(formulaParser('3*(2+1)')).toStrictEqual(data);
})
