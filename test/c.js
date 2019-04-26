/*
  detects multiple calls to done()
*/
describe('double twice',function(){
    it('double done', function(done) {
	setImmediate(done);
	setImmediate(done);
    });
})

 
