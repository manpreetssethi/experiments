/**
 * Created by manpreet on 11/12/15.
 */
require(
    [
        'todomvc/app/todoMVCApp',
        'todomvc/models/AppDataModel',
        'todomvc/collections/TodosCollection',
        'todomvc/views/AppView',
        'todomvc/libraries/EventEmitter'
    ],
    function(
        todoMVCApp,
        AppDataModel,
        TodosCollection,
        AppView,
        EventEmitter
    ){
        var _data = new AppDataModel({
            todosCollection: new TodosCollection()
        });

        todoMVCApp.data        = _data;
        todoMVCApp.eventBus    = new EventEmitter();
        todoMVCApp.view        = new AppView({model: _data});

        $('.container').html(todoMVCApp.view.el);
    }
);