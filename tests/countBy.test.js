import countBy from '../src/countBy'

//array

test('Array has one item', () =>{
    expect(countBy(['test'],(value)=>value==='test')).toStrictEqual({'true':1});
});

test('Array has multiple items', () =>{
    expect(countBy(['test','word','hello','test'],value=>value==='test')).toStrictEqual({'true':2,'false':2});
});

test('Array is empty', () =>{
    expect(countBy([],(value)=>value==='test')).toStrictEqual({});
});

//object

const persons = [{'name':'adam', 'alive':true}, {'name':'betty', 'alive':true}, {'name':'charlie', 'alive':false}]

test('Collection has multiple values', () =>{
    expect(countBy(persons,value=>value.alive)).toStrictEqual({'true':2,'false':1});
});


test('Collection has one item', () =>{
    expect(countBy([{'name':'adam', 'alive':true}],value=>value.alive)).toStrictEqual({'true':1});
});


test('Collection has no items', () =>{
    expect(countBy([{}],value=>value.alive)).toStrictEqual({});
});

test('Collection is number', () =>{
    expect(countBy(5,value=>value.alive)).toStrictEqual({});
});


//iteratee
test('Iteratee returns null', () =>{
    expect(countBy(persons,value=>null)).toStrictEqual({});
});
