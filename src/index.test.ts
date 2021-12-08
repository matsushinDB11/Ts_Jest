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

test('2桁', ()=> {
    const data: parsedOutput = {
        numbers: [23, 98],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('23+98')).toStrictEqual(data);
})
