var should = require('should');
var User = require('./a.js');

describe('user hooks',function(){
    before(function(){
	User.save('wds');
    });
    beforeEach('beforeEach',function(){
	User.save('xjx');
    });

    describe('#save',function(){
	it('save lina sus',function(){
	    User.save('lina');
	})
    });

    describe('#contains',function(){
	it('wds exist',function(){
	    User.contains('wds').should.be.exactly(true);
	});

	it('Martin is not exist',function(){
	    User.contains('Martin').should.be.exactly(false);
	});
    });

    afterEach('afterEach',function(){
	User.delete('wds');
    });

    after('after',function(){
	User.delete('xjx');
    });
})
