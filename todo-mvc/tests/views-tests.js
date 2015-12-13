/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'todomvc/app/todoMVCApp',
        'todomvc/models/AppDataModel',
        'todomvc/views/BaseView',
        'todomvc/views/AppView',
        'todomvc/collections/TodosCollection',
        'todomvc/models/TodoModel',
        'todomvc/views/TodosView',
        'todomvc/views/TodoView',
        'todomvc/views/CreateTodoView'
    ],
    function(
        todoMVCApp,
        AppDataModel,
        BaseView,
        AppView,
        TodosCollection,
        TodoModel,
        TodosView,
        TodoView,
        CreateTodoView
    ){
        var should = require('chai').should();
        var sinon = require('sinon');


        beforeEach(function(){
            todoMVCApp.data = new AppDataModel();
            todoMVCApp.data.set('todosCollection', new TodosCollection());
        })

        describe('App View', function() {
            beforeEach(function() {
                this.appView = new AppView({
                    model: todoMVCApp.data
                });

                $('#fixtures').html(this.appView.el);
            });

            it('should exist', function(){
                this.appView.should.be.ok;
            })

            it('on initialization render should be called', function(){
                should.equal(this.appView.$el.find('.app-container').length, 1);
            })

            it('should render todos & create todo view when render is called', function(){
                this.appView.render();
                should.equal(this.appView.$el.find('.todos-view-container, .create-todo-view-container').length, 2);
            })

            it('should render todos view', function(){
                this.appView.renderTodosView();
                should.equal(this.appView.$el.find('.todos-view-container').length, 1);
            })

            it('should render create todo view', function(){
                this.appView.renderCreateTodoView();
                should.equal(this.appView.$el.find('.create-todo-view-container').length, 1);
            })
        });

        describe('Todo View', function() {
            beforeEach(function() {
                this.todoModel = new TodoModel({id: 1, title: 'todo 1', completed: false});
                this.todoView = new TodoView({model: this.todoModel});
                this.save_stub = sinon.stub(this.todoModel, 'save');
            });

            it('should exist', function(){
                this.todoView.should.be.ok;
            })

            it('should render as a list item', function(){
                this.todoView.el.nodeName.should.equal('LI');
            })

            it('should render an unchecked checkbox', function(){
                should.equal(this.todoView.$el.find('input[name="completed"]').is(':checked'), false);
            })

            it('should save model when checkbox changes', function(){
                this.todoView.updateCompleted();
                should.equal(this.save_stub.calledOnce, true);
            })
        });

        describe('Todos View', function() {
            beforeEach(function() {
                this.todosCollection = new TodosCollection();
                this.todosView = new TodosView({collection: this.todosCollection});

                this.todosCollection.add([
                    {id: 1, title: 'todo 1', completed: false},
                    {id: 2, title: 'todo 2', completed: true}
                ]);
            });

            it('should exist', function(){
                this.todosView.should.be.ok;
            })

            it('should render as an unordered list', function(){
                this.todosView.el.nodeName.should.equal('UL');
            })

            it('should include list items for all the models in the collection', function(){
                should.equal(this.todosView.$el.find('li.todo-view-container').length, this.todosCollection.length);
            })

            it('should render a new todo item when an item is added to the collection', function(){
                this.todosCollection.add({id: 3, title: 'todo 3', completed: false});
                should.equal(this.todosView.$el.find('li.todo-view-container').length, this.todosCollection.length);
            })
        });

        describe('Create Todo View', function() {
            beforeEach(function() {
                this.todosCollection = todoMVCApp.data.get('todosCollection');
                this.createTodoView = new CreateTodoView({collection: this.todosCollection});

                this.collectionCreate_stub = sinon.stub(this.createTodoView.collection, 'create');

                $('#fixtures').html(this.createTodoView.el);
            });

            after(function(){
                $('#fixtures').html('');
                this.collectionCreate_stub.restore();
            });

            it('should exist', function(){
                this.createTodoView.should.be.ok;
            })

            it('should have a collection', function(){
                this.createTodoView.collection.should.be.ok;
            })

            it('on initialization render should be called', function(){
                should.equal(this.createTodoView.$el.find('form').length, 1);
            })

            it('should reset the text field', function(){
                this.createTodoView.resetTodoTitleField();
                should.equal(this.createTodoView.$el.find('input[name="todo-title"]').val(), '');
            })

            it('should show a validation error if empty title provided', function(){
                this.showValidationError_stub = sinon.stub(this.createTodoView, 'showErrorMessage');
                this.createTodoView.saveTodo('');
                should.equal(this.showValidationError_stub.calledOnce, true);
                this.showValidationError_stub.restore();
            })

            it('should show a validation error if an undefined title provided', function(){
                this.showValidationError_stub = sinon.stub(this.createTodoView, 'showErrorMessage');
                this.createTodoView.saveTodo(undefined);
                should.equal(this.showValidationError_stub.calledOnce, true);
                this.showValidationError_stub.restore();
            })

            it('should save when a valid title provided', function(){
                this.createTodoView.saveTodo('new todo');
                should.equal(this.collectionCreate_stub.calledOnce, true);
            })
        });
    }
)