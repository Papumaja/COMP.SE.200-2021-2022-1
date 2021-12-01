import reduce from '../src/reduce'

// List

test('Test List empty', () => {
    expect(reduce([], (a, b)=>{return a+b}, 0)).toBe(0);
});

test('Test List has items', () => {
    expect(reduce([1, 2 ,3], (a, b)=>{return a+b}, 0)).toBe(6);
});

test('Test List has items of multiple number types', () => {
    expect(reduce([1, 2.2 ,3, false, true], (a, b)=>{return a+b}, 0)).toBe(7.2);
});

test('Test List when reducer returns different data type', () => {
    expect(reduce([1, 2, 3], (a, b)=>{return a+2.1}, 0)).toBeCloseTo(6.3);
});

// Object

test('Test Object empty', () => {
    expect(reduce({}, (a, b)=>{return a+b}, 0)).toBe(0);
});

test('Test Object has items', () => {
    expect(reduce({'a': 3, 'b':1, 'c':2}, (a, b)=>{return a+b}, 0)).toBe(6);
});

test('Test Object has items of multiple number types', () => {
    expect(reduce({'y':1, 'f':2.2 , 'g':3, 'd':false, 'c':true}, (a, b)=>{return a+b}, 0)).toBe(7.2);
});

test('Test Object when reducer returns different data type', () => {
    expect(reduce({'y': 1, 'c': 2, 'd': 3}, (a, b)=>{return a+2.1}, 0)).toBeCloseTo(6.3);
});

// Map

test('Test Map empty', () => {
    expect(reduce(new Map(), (a, b)=>{return a+b}, 0)).toBe(0);
});

test('Test Map has items', () => {
    let map = new Map()
    map.set('a', 3)
    map.set('b', 2)
    map.set('c', 1)
    expect(reduce(map, (a, b)=>{return a+b}, 0)).toBe(6);
});

test('Test Map has items of multiple number types', () => {
    let map = new Map()
    map.set('a', 3)
    map.set('b', 2.2)
    map.set('c', 3)
    map.set('f', false)
    map.set('g', true)
    expect(reduce(map, (a, b)=>{return a+b}, 0)).toBe(7.2);
});

test('Test Map when reducer returns different data type', () => {
    let map = new Map()
    map.set('a', 3)
    map.set('b', 2)
    map.set('c', 1)
    expect(reduce(map, (a, b)=>{return a+2.1}, 0)).toBeCloseTo(6.3);
});

// Test erroneus inputs

test('Test Number', () => {
    expect(reduce(3, (a, b)=>{return a+2.1}, 0)).toBe(0);
});
test('Test Boolean', () => {
    expect(reduce(true, (a, b)=>{return a+2.1}, 0)).toBe(0);
});
test('Test String', () => {
    expect(reduce("Auto", (a, b)=>{return a+2.1}, 0)).toBe(0);
});

test('Test Iteratee not returning', () => {
    expect(reduce([1, 2, 3], (a, b)=>{let c = 1}, 0)).toBe(undefined);
});

test('Test Iteratee throwing', () => {
    expect(reduce([1, 2, 3], (a, b)=>{throw "a"}, 0)).toThrow("a");
});

test('Test different accumulator type', () => {
    expect(reduce([1, 2, 3], (a, b)=>{a+b}, "uppsala")).toBe("uppsala123");
});