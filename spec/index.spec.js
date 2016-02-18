var app = require('../src/index.js');

describe('Testing basic mathematics on jasmine node.', function(){
  var x, y;
  beforeEach(function(){
    x = 10;
    y = 5;
  });
  afterEach(function(){
    x = 10;
    y = 5;
  });
  it('sum of 10 and 5 is 15', function(){
    expect(app.sum(x, y)).toBe(15);
  });
  it('difference of 10 and 5 is 5', function(){
    expect(app.diff(x, y)).toBe(5);
  });
});

