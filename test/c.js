/*
  detects multiple calls to done()
*/
it('double done', function(done) {
    setImmediate(done);
    setImmediate(done);
});
 
