// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber() tests 
test('valid phone number with dash', () => {
  expect(isPhoneNumber('562-922-1010')).toBe(true);
});
test('valid phone number with space', () => {
  expect(isPhoneNumber('562 922-1010')).toBe(true);
});
test('invalid phone number with wrong number of digits', () => {
  expect(isPhoneNumber('562-92-1010')).toBe(false);
});
test('invalid phone number with extra characteres', () => {
  expect(isPhoneNumber('562-922i-1010')).toBe(false);
});


//isEmail() tests 
test('valid email', () => {
  expect(isEmail('apjahromi@ucsd.edu')).toBe(true);
});
test('valid email with different domain', () => {
  expect(isEmail('apj5@gmail.com')).toBe(true);
});
test('invalid email with wrong domanin', () => {
  expect(isEmail('apjahromi@gmail.comms')).toBe(false);
});
test('invalid email with missing username', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});

//isStrongPassword() tests 
test('valid password', () => {
  expect(isStrongPassword('StrongPassword')).toBe(true);
});
test('valid password with numbers and underscore', () => {
  expect(isStrongPassword('Strong123_')).toBe(true);
});
test('invalid password with not enough characters', () => {
  expect(isStrongPassword('pas')).toBe(false);
});
test('invalid password with special characteres', () => {
  expect(isStrongPassword('p@@$word')).toBe(false);
});

//isDate() tests 
test('valid date full format', () => {
  expect(isDate('10/01/2005')).toBe(true);
});
test('valid date short format', () => {
  expect(isDate('1/1/2005')).toBe(true);
});
test('invalid date with dashes', () => {
  expect(isDate('10-01-2005')).toBe(false);
});
test('invalid date with not enough year digits', () => {
  expect(isDate('10/01/05')).toBe(false);
});

//isHexColor() tests
test('valid hex color 6 digits', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('valid hex color 3 digits', () => {
  expect(isHexColor('abc')).toBe(true);
});
test('invalid hex color of wrong length', () => {
  expect(isHexColor('12345')).toBe(false);
});
test('invalid hex color of wrong letters', () => {
  expect(isHexColor('#123XYZ')).toBe(false);
});