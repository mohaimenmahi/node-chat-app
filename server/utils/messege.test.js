var expect = require('expect');

var {generateMessege} =require('./messege');

describe('generateMessege', () => {
  it('should generate correct messege', () => {
    var from = 'Jen';
    var text = 'Some messsege';
    var messege = generateMessege(from, text);

    expect(messege.createdAt).toBeA('number');
    expect(messege).toInclude({from, text});
  });
});
