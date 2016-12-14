var Query = require('./index');
var input, query;

console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a'}, action: 'include'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);

query = new Query([
  {criteria: {key1: 'a'}, action: 'include'}
]);

console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));

console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a'}, action: 'include'},
  {criteria: {key1: 'b', key2: 'c'}, action: 'include'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);

console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));

console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a', key2: 'b'}, action: 'include'},
  {criteria: {key3: 'c'}, action: 'exclude'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);

console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));

console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a', key2: 'b'}, action: 'exclude'},
  {criteria: {key3: 'c', key4: 'd'}, action: 'include'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);


console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));


console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a'}, action: 'include'},
  {criteria: {key2: 'b', key3: 'c'}, action: 'exclude'},
  {criteria: {key1: 'd', key2: 'e', key3: 'f'}, action: 'include'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);


console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));


console.log('///////////////////////////////////');

input = [
  {criteria: {key1: 'a'}, action: 'include'},
  {criteria: {key2: 'b'}, action: 'exclude'},
  {criteria: {key3: 'c'}, action: 'include'},
  {criteria: {key4: 'd'}, action: 'exclude'}
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);


console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));


console.log('///////////////////////////////////');

input = [
];

console.log('for input: ')
console.log(JSON.stringify(input, '  ', 2));

console.log('result is: ');
query = new Query(input);


console.log(query.explanation);

console.log(JSON.stringify(query.query, '  ', 2));
