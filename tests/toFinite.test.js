import toFinite from '../src/toFinite'

// Strings

test('String is representing infinitely large number', () =>{
    expect(toFinite("Infinity")).toBe(1.7976931348623157e+308);
});

test('String is representing infinitely negative number', () =>{
    expect(toFinite(""+(-Infinity)+"")).toBe(-1.7976931348623157e+308);
});

test('String is representing indefinitely small number', () =>{
    expect(toFinite(""+Number.MIN_VALUE+"")).toBe(5e-324);
});

test('String is representing a negative integer', () =>{
    expect(toFinite("-358")).toBe(-358);
});

test('String is representing a positive integer', () =>{
    expect(toFinite("58")).toBe(58);
});

test('String is representing a positive floating point number', () =>{
    expect(toFinite("58.123")).toBe(58.123);
});

test('String is representing a negative floating point number', () =>{
    expect(toFinite("-8.20000001e+49")).toBe(-8.20000001e+49);
});

// Integers

test('Integer is representing infinitely large number', () =>{
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
});

test('Integer is representing infinitely negative number', () =>{
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
});

test('Integer is 0', () =>{
    expect(toFinite(0)).toBe(0);
});

test('Negative integer', () =>{
    expect(toFinite(-35921)).toBe(-35921);
});

test('Positive integer', () =>{
    expect(toFinite(21124)).toBe(21124);
});

// Floating point values

test('Float is representing infinitely large number', () =>{
    expect(toFinite(Infinity+1.3)).toBe(1.7976931348623157e+308);
});

test('Float is representing infinitely negative number', () =>{
    expect(toFinite(-1.2-Infinity)).toBe(-1.7976931348623157e+308);
});

test('Float is indefinitely small', () =>{
    expect(toFinite(parseFloat(Number.MIN_VALUE))).toBe(5e-324);
});

test('Negative float', () =>{
    expect(toFinite(-35.921)).toBeCloseTo(-35.921);
});

test('Positive float', () =>{
    expect(toFinite(211.24e+16)).toBeCloseTo(211.24e+16);
});

// Boolean

test('Input true', () => {
    expect(toFinite(true)).toBe(1)
}) 

test('Input false', () => {
    expect(toFinite(false)).toBe(0)
}) 

// Invalid inputs

test('Input null', () => {
    expect(toFinite(null)).toBe(0)
}) 

test('Input function', () => {
    expect(toFinite(() => {a = 1; return a / 7})).toBe(0)
}) 

test('Input list', () => {
    expect(toFinite([1.23, 41, 23])).toBe(0)
}) 

test('Input Object', () => {
    expect(toFinite({'jabaduu': Infinity})).toBe(0)
}) 