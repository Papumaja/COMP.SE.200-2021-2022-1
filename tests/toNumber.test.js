import toNumber from '../src/toNumber'

//string to number

test('String is positive', () =>{
    expect(toNumber('2')).toBe(2);
});

test('String is negative', () =>{
    expect(toNumber('-1')).toBe(-1);
});

test('String is float', () =>{
    expect(toNumber('3.295481')).toBeCloseTo(3.295481);
});


//integers

test('Integer is positive', () =>{
    expect(toNumber(5)).toBe(5);
});

test('Integer is negative', ()=>{
    expect(toNumber(-6)).toBe(-6);
});


//floats

test('Float is positive', ()=>{
    expect(toNumber(2.513858342)).toBeCloseTo(2.513858342);
});

test('Float is negative', ()=>{
    expect(toNumber(-2.513858342)).toBeCloseTo(-2.513858342);
});

//max and min values

test('Value is MAX_VALUE', ()=>{
    expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
});


test('Value is MIN_VALUE', ()=>{
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
});

//other inputs

test('Input is boolean', () =>{
    expect(toNumber(true)).toBe(1);
});

test('Input is Null', () =>{
    expect(toNumber(null)).toBe(0);
});

test('Input is list', ()=>{
    expect(toNumber(['a','4'])).toBe(NaN);
});

test('Input is object', ()=> {
    expect(toNumber({'a': 6, 'b':7})).toBe(NaN);
});

test('Input is function', ()=> {
    expect(toNumber(() => {a=6; return a+4})).toBe(NaN)
})