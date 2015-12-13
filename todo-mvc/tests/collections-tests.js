/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'todomvc/collections/BaseCollection',
        'todomvc/collections/TodosCollection'
    ],
    function(
        BaseCollection,
        TodosCollection
    ){
        var should = require('chai').should();
        var expect = require('chai').expect;

        describe('Todos Collection', function() {
            beforeEach(function() {
                this.todosCollection = new TodosCollection({
                    "fail": false,
                    "data": {
                        "-K5Pv8x8XkTsstybHRx6": {"completed": true, "createdAt": 1450003177363, "title": "buy eggs"},
                        "-K5PvBevlP0pFYjb_qWV": {"completed": false, "createdAt": 1450003188486, "title": "do laundry"}
                    }
                }, {parse: true});
            });

            it('Should parse data from server', function () {
                var _json = _.first(this.todosCollection.toJSON());
                expect(_json).to.not.equal({id: '-K5Pv8x8XkTsstybHRx6', title: 'buy eggs', createdAt: 1450003177363, completed: true});
            });
        });
    }
)