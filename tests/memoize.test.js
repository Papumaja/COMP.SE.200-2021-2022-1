import memoize from '../src/memoize'
// Test valid scenarios
test('Test basic functionality and presence of cached value', () => {
    let func = (a) => {a * 2}
    let resolver = (a) => {a+1}
    let m_func = memoize(func, resolver)
    let temp = m_func(5);
    expect(temp).toBe(10);
    expect(m_func.cache.get(resolver(5))).toBe(temp);
    let temp2 = m_func(5);
    expect(temp2).toBe(temp);
});
test('Test basic functionality without supplying resolver', () => {
    let func = (a) => {a * 2}
    let m_func = memoize(func)
    let temp = m_func(5);
    expect(temp).toBe(10);
    expect(m_func.get(5)).toBe(temp);
    let temp2 = m_func(5);
    expect(temp2).toBe(temp);
});
test('Test func returning different datatypes', () => {
    let func = (a) => {if (a == 1) {return 1} else {return "1"}}
    let resolver = (a) => {a+1}
    let m_func = memoize(func, resolver)
    let temp = m_func(1);
    expect(temp).toBe(1);
    expect(m_func.cache.get(resolver(1))).toBe(1);
    let temp2 = m_func(2);
    expect(temp2).toBe("1");
    expect(m_func.cache.get(resolver(2))).toBe("1");
    expect(m_func.cache.get(resolver(1))).toBe(1);
    temp = m_func(1);
    expect(temp).toBe(1);
});


// Test invalid functions
test('Resolver returning non-hashable values', () =>{
    let func = (a) => {a * 2}
    let resolver = (a) => {null}
    expect(memoize(func, resolver)).toThrow();
});

// Test invalid inputs as functions & resolvers
test('Number as function', () =>{
    let func = 5
    let resolver = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('Object as function', () =>{
    let func = {}
    let resolver = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('String as function', () =>{
    let func = "Abba"
    let resolver = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('List as function', () =>{
    let func = []
    let resolver = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('Number as resolver', () =>{
    let resolver = 5
    let func = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('Object as resolver', () =>{
    let resolver = {}
    let func = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('String as resolver', () =>{
    let resolver = "Abba"
    let func = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});
test('List as resolver', () =>{
    let resolver = []
    let func = (a) => {a + 1}
    expect(memoize(func, resolver)).toThrow(TypeError);
});