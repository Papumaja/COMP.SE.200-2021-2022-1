import words from "../src/words"

test('Simple string of multiple words', () =>{
    expect(words('This is true')).toStrictEqual(['This', 'is', 'true']);
});

test('Empty string', () =>{
    expect(words('')).toStrictEqual([]);
});

test('String contains only whitespaces (spaces and tabs)', () =>{
    expect(words('  	       ')).toStrictEqual([]);
});

test('String has only one word', () =>{
    expect(words('Word')).toStrictEqual(['Word']);
});

test('String has only one word, ending in whitespace', () =>{
    expect(words('Word ')).toStrictEqual(['Word']);
});

test('String has only one word, beginning in whitespace', () =>{
    expect(words(' Word')).toStrictEqual(['Word']);
});

test('String has only one word, beginning and ending in whitespace', () =>{
    expect(words(' Word ')).toStrictEqual(['Word']);
});

test('String contains double whitespaces', () =>{
    expect(words('Word  is that   ipsum')).toStrictEqual(['Word', 'is', 'that', 'ipsum']);
});

test('String contains different whitespaces (tab and space)', () =>{
    expect(words('Word is that	ipsum')).toStrictEqual(['Word', 'is', 'that', 'ipsum']);
});

test('String contains words divided with special symbols', () =>{
    expect(words('We@rd. . th$£ öä!== & 565')).toStrictEqual(['We', 'rd', 'th', 'öä', '565']);
});

