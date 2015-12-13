/**
 * Created by manpreet on 12/12/15.
 */
define(
    [
        'todomvc/app/todoMVCApp',
        'backbone'
    ],
    function(
        App,
        todoMVCApp
    ){
        var should = require('chai').should();
        var expect = require('chai').expect;
        var sinon = require('sinon');

        describe('App', function() {
            beforeEach(function() {
                this.app = todoMVCApp;
            });

            it('should start backbone history when startHistory is called', function(){
                this.historyStartStub = sinon.stub(Backbone.history, 'start');
                this.app.startHistory();
                should.equal(this.historyStartStub.calledOnce, true);
                this.historyStartStub.restore();
            })
        });
    }
)