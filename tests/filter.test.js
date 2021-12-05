import filter from "../src/filter"

//array testing

test('Array is empty', () =>{
    expect(filter([],({active})=>active)).toStrictEqual([[]]);
});

test('Array has many different datatypes', () =>{
    expect(filter(['hello',2,4.21321,5,7],(value)=>Number.isInteger(value))).toStrictEqual([2,5,7]);
});

test('Array has one item', () =>{
    expect(filter(['word'],(value)=>value==='word')).toStrictEqual(['word']);
});


//predicate testing
test('Predicate returns nothing', () =>{
    expect(filter(['hello',2,4.21321,5,7],()=>{let a = 1})).toStrictEqual([[]]);
});

test('Predicate throws error', () =>{
    expect(filter(['hello',2,4.21321,5,7],(value)=>{throw new TypeError()})).toThrow(TypeError)
});


//Object

test('Object has one item', () =>{
    expect(filter({'name':'adam'},(value)=>value==='adam')).toStrictEqual([[]]);
});


test('Object has multiple items', () =>{
    expect(filter({'name':'adam', 'age':12, 'adam':'name'},(value)=>value==='adam')).toStrictEqual([[]]);
});

test('Object is empty', () =>{
    expect(filter({},(value)=>value==='adam')).toStrictEqual([[]]);
});