const { fixture } = require('./helpers');
const expect = chai.expect;

describe('Element.prototype', function() {
  it('should patch the Element prototype', function() {
    expect(Element.prototype.hasOwnProperty('inert')).to.be.ok;
  });
});
