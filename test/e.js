/*
callback
promise
*/
var should = require( 'should' );
var Ajax   = require( './e_2.js' );

describe( 'Ajax', function () {

    describe( '#load()', function () {
	
        it( 'should return the load result.', function ( done ) {
            Ajax.load( 'url', function ( result ) {
                result.should.equal( 'url' );
                done();
            });
        });
		
    })
});

var DB  = require( './e_3.js' );

describe( 'DB', function (){

    describe( '#save()', function (){

        it( 'save without error.', function () {
            return DB.save( 'test' );
        });
    })
});
