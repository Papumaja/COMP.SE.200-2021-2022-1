import filter from "../src/filter"

//different array variants

test('Array is empty', () =>{
    expect(filter([],({active})=>active)).toStrictEqual([[]]);
});

test('Array has many different datatypes', () =>{
    expect(filter(['hello',2,4.21321,5,7],(value)=>Number.isInteger(value))).toStrictEqual([2,5,7]);
});


test('Predicate returns nothing', () =>{
    expect(filter(['hello',2,4.21321,5,7],()=>null)).toStrictEqual([[]]);
});