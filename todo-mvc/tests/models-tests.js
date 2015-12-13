/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'todomvc/models/BaseModel',
        'todomvc/models/AppDataModel',
        'todomvc/models/TodoModel'
    ],
    function(
        BaseModel,
        AppDataModel,
        TodoModel
    ){
        var should = require('chai').should();

        describe('Playlist Model', function() {
            beforeEach(function() {
                this.todoModel = new TodoModel();
            });

            describe('Initialisation', function () {
                it('default value of attribute "id" is null', function(){
                    should.equal(this.todoModel.get('id'), null);
                })

                it('default value of attribute "title" is null', function(){
                    should.equal(this.todoModel.get('title'), null);
                })

                it('default value of attribute "completed" is false', function(){
                    should.equal(this.todoModel.get('completed'), false);
                })

                it('default value of attribute "createdAt" is null', function(){
                    should.equal(this.todoModel.get('createdAt'), null);
                })
            });

            describe('Validation', function () {
                it('should fail validation if the attribute "title" is an empty string', function(){
                    var _error = this.todoModel.validate({title: ''});
                    should.equal(_error, 'Provide a task title!');
                })
            });
        });

        describe('App Data Model', function() {
            describe('Initialisation', function () {
                beforeEach(function() {
                    this.appDataModel = new AppDataModel();
                });

                it('default value of attribute "todosCollection" is null', function(){
                    should.equal(this.appDataModel.get('todosCollection'), null);
                })
            });
        });

        describe('Base Model', function() {
            describe('Initialisation', function () {
                beforeEach(function() {
                    this.baseModel = new BaseModel();
                });
            });
        });
    }
)