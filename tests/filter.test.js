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
test('Predicate returns null', () =>{
    expect(filter(['hello',2,4.21321,5,7],()=>null)).toStrictEqual([[]]);
});

test('Predicate throws error', () =>{
    expect(filter(['hello',2,4.21321,5,7],(value)=>{throw 'error'})).toStrictEqual([[]]);
});