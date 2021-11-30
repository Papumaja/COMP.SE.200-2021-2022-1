import eq from '../src/eq'

test('Tests if 1 is equal to 1', () => {
    expect(eq(1, 1)).toBe(true);
});