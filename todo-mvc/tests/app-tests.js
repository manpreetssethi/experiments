/**
 * Created by manpreet on 12/12/15.
 */
define(
    [
        'podlists/app/App',
        'backbone'
    ],
    function(
        App,
        Backbone
    ){
        var should = require('chai').should();
        var expect = require('chai').expect;
        var sinon = require('sinon');

        describe('App', function() {
            beforeEach(function() {
                this.app = new App({});
            });

            it('should have a property "options" assigned with the first argument in the contstructor', function(){
                expect(this.app.options).to.eql({});
            })

            it('should start backbone history when startHistory is called', function(){
                this.historyStartStub = sinon.stub(Backbone.history, 'start');
                this.app.startHistory();
                should.equal(this.historyStartStub.calledOnce, true);
                this.historyStartStub.restore();
            })
        });
    }
)