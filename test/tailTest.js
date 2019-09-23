const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#head", () => {
  it("returns '['Lighthouse', 'Labs']' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const tailed = tail(words);
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});