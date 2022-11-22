// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone number tests
test("UCSD's phone number is a valid phone number", () => {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});

test("CSE's phone number is a valid phone number", () => {
    expect(functions.isPhoneNumber('(858) 534-8872')).toBe(true);
});

test("Keyboard smash is not a valid phone number", () => {
    expect(functions.isPhoneNumber('as;dlfkajsd;flkdsj')).toBe(false);
});

test("Zero is not a valid phone number", () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});

// Email tests
test("HDH's email is a valid email", () => {
    expect(functions.isEmail('housinginfo@ucsd.edu')).toBe(true);
});

test("Test generic email is a valid email", () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test("Test keyboard smash is not a valid email", () => {
    expect(functions.isEmail('a;oweir;as;dlcj;cvzx@gmail.com')).toBe(false);
});

test("Test frankenemail is not a valid email", () => {
    expect(functions.isEmail('this@gyahoo12312aolmail.com')).toBe(false);
});

// Password tests
test("Keyboard smash is a strong password", () => {
    expect(functions.isStrongPassword('p12Af_12_j')).toBe(true);
});

test("Ironic password is a strong password", () => {
    expect(functions.isStrongPassword('Str0ng_pAss')).toBe(true);
});

test("Invalid password is not a strong password", () => {
    expect(functions.isStrongPassword('!!!!!!!!!!!!!!!')).toBe(false);
});

test("Single letter password is not a strong password", () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

// Date tests
test("Today's date is a valid date", () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
});
test("Christimas is a valid date", () => {
    expect(functions.isDate('12/25/2022')).toBe(true);
});
test("100th month is not a valid date", () => {
    expect(functions.isDate('100/1/2022')).toBe(false);
});
test("Negative month is not a valid date", () => {
    expect(functions.isDate('-1/1/2022')).toBe(false);
});

// Hex tests
test("Salmon is a valid HexCode", () => {
    expect(functions.isHexColor('FA8072')).toBe(true);
});
test("The one that you know is a valid HexCode", () => {
    expect(functions.isHexColor('99FFFF')).toBe(true);
});
test("Just Gs is not a valid HexCode", () => {
    expect(functions.isHexColor('GGGGGG')).toBe(false);
});
test("Negative Hex is not a valid HexCode", () => {
    expect(functions.isHexColor('-111111')).toBe(false);
});

