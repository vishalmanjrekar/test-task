import React from 'react';
import * as TestFunction from "./Test";
const assert = require('assert')

const htmlString = "<div><p>The first paragraph.</p><p>The second paragraph.</p><div><p>The third paragraph is nested.</p><p>As is the fourth.</p></div></div>";

const htmlArray = [
    'div',
    ['p', 'The first paragraph.'],
    ['p', 'The second paragraph.'],
    [
        'div',
        ['p', 'The third paragraph is nested.'],
        ['p', 'As is the fourth.']
    ]
];

describe('serialize function', function() {
    it('should return null when value is not passed', () => {
        assert.equal(TestFunction.serialize([]), null);
    });
    it('should return 0 when value first element is not string', () => {
        assert.equal(TestFunction.serialize([["p","first paragraph"]]), 0);
    });
    it('should return same response', () => {
        assert.equal(TestFunction.serialize(htmlArray), htmlString);
    });
    it('should return <div></div>', () => {
        assert.equal(TestFunction.serialize(['div']), "<div></div>");
    });
});

describe('deserialize function', function() {
    it('should return null when value is not passed', () => {
        assert.equal(TestFunction.deserialize(), null);
    });
    it('should return same response', () => {
        assert.deepEqual(TestFunction.deserialize(htmlString), htmlArray);

    });
    it('should return ["div"]]', () => {
        assert.deepEqual(TestFunction.deserialize("<div></div>"), ['div']);
    });
});