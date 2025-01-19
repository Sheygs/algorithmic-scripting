### WhatIsInAName

Make a function that looks through an array of objects
`first argument` and returns an array of all objects
that have matching name and value pairs `second argument`.
Each name and value pair of the source object has to be
present in the object from the collection if it is to
be included in the returned array.

```js
whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }],
  { apple: 1, bat: 2 },
);

whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // returns []
```
