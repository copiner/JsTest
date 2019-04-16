/*
./node_modules/mocha/bin/mocha test.js
describe (test suite)
it(test case)
*/

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/*
  detects multiple calls to done()
*/
//it('double done', function(done) {
//  // Calling `done()` twice is an error
//  setImmediate(done);
//  setImmediate(done);
//});
//
/*
assertions
*/

//should.js chai expect.js ...

/*
  asynchronous code
*/
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});

/*
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});
*/


/*
  working with promise
*/
//beforeEach(function() {
//  return db.clear().then(function() {
//    return db.save([tobi, loki, jane]);
//  });
//});
//
//describe('#find()', function() {
//  it('respond with matching records', function() {
//    return db.find({type: 'User'}).should.eventually.have.length(3);
//  });
//});
//
// antipattern
//it('should complete this test', function(done) {
//  return new Promise(function(resolve) {
//    assert.ok(true);
//    resolve();
//  }).then(done);
//});
//
/*
using async/await
*/

//beforeEach(async function() {
//  await db.clear();
//  await db.save([tobi, loki, jane]);
//});
//
//describe('#find()', function() {
//  it('responds with matching records', async function() {
//    const users = await db.find({type: 'User'});
//    users.should.have.length(3);
//  });
//});
//
/*synchronous code*/

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});


/*
hooks
*/
describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});

/*
describing hooks
*/
beforeEach(function() {
  // beforeEach hook
});

beforeEach(function namedFun() {
  // beforeEach:namedFun
});

beforeEach('some description', function() {
  // beforeEach:some description
});