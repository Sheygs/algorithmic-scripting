function updateRecords(id, prop, value) {
  if (collection.hasOwnProperty(id)) {
    if (prop && prop !== 'tracks') {
      if (value) {
        collection[id][prop] = value;
      } else {
        delete collection[id][prop];
      }
    } else if (prop === 'tracks') {
      if (value) {
        if (!collection[id][prop]) {
          collection[id][prop] = [];
          collection[id][prop].push(value);
        } else {
          collection[id][prop].push(value);
        }
      } else {
        delete collection[id][prop];
      }
    }
  }
  return collection;
}
