import formulaParser, {parsedOutput} from "./index";

test('plus test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('2+3')).toEqual(data);
})

test('minus test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['-']
    }
    expect<parsedOutput>(formulaParser('2-3')).toEqual(data);
})

test('multiplication test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['*']
    }
    expect<parsedOutput>(formulaParser('2*3')).toEqual(data);
})

test('division test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['/']
    }
    expect<parsedOutput>(formulaParser('2/3')).toEqual(data);
})

test('two digit', ()=> {
    const data: parsedOutput = {
        numbers: [23, 98],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('23+98')).toEqual(data);
})

test('parentheses', () => {
    const data: parsedOutput = {
        numbers: [3, 2, 1],
        symbols: ['*', '(', '+', ')']
    }
    expect<parsedOutput>(formulaParser('3*(2+1)')).toEqual(data);
})

test('Error for trailing symbol', () => {
    expect(() => formulaParser('3+2+')).toThrowError(RangeError);
})

test('Error for negative numbers', () => {
    expect(() => formulaParser('-3+2')).toThrowError(RangeError);
})

test('Error for consecutive symbols', () => {
    expect(() => formulaParser('3-+2')).toThrowError(RangeError);
})

test('Error for not covered symbols', () => {
    expect(() => formulaParser('3?2')).toThrowError(RangeError);
})
