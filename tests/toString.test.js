import toString from "../src/toString"




//strings

test('String has multiple items', () =>{
    expect(toString('This is true')).toBe('This is true');
});

test('String has one item', () =>{
    expect(toString('One')).toBe('One');
});

test('String is empty', () =>{
    expect(toString('')).toBe('');
});

//integers

test('Integer is positive', () =>{
    expect(toString(4)).toBe('4');
});

test('Integer is negative', () =>{
    expect(toString(-4)).toBe('-4');
});

//floats

test('Float is positive', () =>{
    expect(toString(2.93584)).toBe('2.93584');
});

test('Float is negative', () =>{
    expect(toString(-2.93584)).toBe('-2.93584');
});

test('Number is -0', () =>{
    expect(toString(-0)).toBe('-0');
});


//lists

test('List has one item', () =>{
    expect(toString(['a'])).toBe('a');
});


test('List has multiple items', () =>{
    expect(toString(['a', 5.76, 'c'])).toBe('a,5.76,c');
});

test('List has no items', () =>{
    expect(toString([])).toBe('');
});