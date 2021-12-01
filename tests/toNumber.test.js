import toNumber from '../src/toNumber'

//string to number

test('String is positive', () =>{
    expect(toNumber('2')).toBe(2);
});

test('String is negative', () =>{
    expect(toNumber('-1')).toBe(-1);
});

test('String is double', () =>{
    expect(toNumber('3.295481')).toBeCloseTo(3.295481);
});


//integers

test('Integer is positive', () =>{
    expect(toNumber(5)).toBe(5);
});

//other inputs

test('Input is boolean', () =>{
    expect(toNumber(true)).toBe(1);
});

test('Input is Null', () =>{
    expect(toNumber(null)).toBe(0);
});