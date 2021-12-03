import toInteger from "../src/toInteger"



//string to number

test('String is positive', () =>{
    expect(toInteger('2')).toBe(2);
});

test('String is negative', () =>{
    expect(toInteger('-1')).toBe(-1);
});

test('String is float', () =>{
    expect(toInteger('3.295481')).toBe(3);
});


//integers

test('Integer is positive', () =>{
    expect(toInteger(5)).toBe(5);
});

test('Integer is negative', ()=>{
    expect(toInteger(-6)).toBe(-6);
});


//floats

test('Float is positive', ()=>{
    expect(toInteger(2.513858342)).toBe(2);
});

test('Float is negative', ()=>{
    expect(toInteger(-2.413858342)).toBe(-2);
});

//max and min values

test('Value is MAX_VALUE', ()=>{
    expect(toInteger(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
});


test('Value is MIN_VALUE', ()=>{
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
});

//other inputs

test('Input is boolean', () =>{
    expect(toInteger(true)).toBe(1);
});

test('Input is Null', () =>{
    expect(toInteger(null)).toBe(0);
});

test('Input is list', ()=>{
    expect(toInteger(['a','4'])).toBe(0);
});

test('Input is object', ()=> {
    expect(toInteger({'a': 6, 'b':7})).toBe(0);
});

test('Input is function', ()=> {
    expect(toInteger(() => {a=6; return a+4})).toBe(0)
})