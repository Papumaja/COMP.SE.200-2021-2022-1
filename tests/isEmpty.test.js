import isEmpty from '../src/isEmpty'

// Lists

test('Test List empty', () => {
    expect(isEmpty([])).toBe(true);
});

test('Test List one item', () => {
    expect(isEmpty([1])).toBe(false);
});

test('Test List many items', () => {
    expect(isEmpty([1, 2, 'abc', {'a': 1}])).toBe(false);
});

// Strings

test('Test String empty', () => {
    expect(isEmpty("")).toBe(true);
});

test('Test String one item', () => {
    expect(isEmpty("a")).toBe(false);
});

test('Test String many items', () => {
    expect(isEmpty("This sentence is False")).toBe(false);
});

// Objects

test('Test Object empty', () => {
    expect(isEmpty({})).toBe(true);
});

test('Test Object one item', () => {
    expect(isEmpty({'a': 'b'})).toBe(false);
});

test('Test Object many items', () => {
    expect(isEmpty({'a': 'b', 'c': 'd', 'cool': 0})).toBe(false);
});

// Test non-container values, should all return true

test('Test integer', () => {
    expect(isEmpty(1337)).toBe(true);
});

test('Test float', () => {
    expect(isEmpty(1337.2245)).toBe(true);
});

test('Test null', () => {
    expect(isEmpty(null)).toBe(true);
});

test('Test boolean true', () => {
    expect(isEmpty(true)).toBe(true);
});

test('Test boolean false', () => {
    expect(isEmpty(false)).toBe(true);
});

test('Test function', () => {
    expect(isEmpty(() => {a = 3; return a*5})).toBe(true);
});