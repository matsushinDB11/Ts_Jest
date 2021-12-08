import formulaParser, {parsedOutput} from "./index";

test('plus test', ()=> {
    const data: parsedOutput = {
        numbers: [2, 3],
        symbols: ['+']
    }
    expect<parsedOutput>(formulaParser('2+3')).toStrictEqual(data);
})
