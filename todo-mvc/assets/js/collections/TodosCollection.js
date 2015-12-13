/**
 * Created by manpreet on 12/12/15.
 */
define(
    'todomvc/collections/TodosCollection',
    [
        'todomvc/collections/BaseCollection',
        'todomvc/helpers/api.config',
        'todomvc/models/TodoModel'
    ],
    function(
        BaseCollection,
        apiConfig,
        TodoModel
    ){
        var TodosCollection = BaseCollection.extend({
            url: apiConfig.todos.all,

            model: TodoModel,

            parse: function(response) {
                var models = [];
                if(response.fail === false) {
                    _.each(response.data, function(value, key){
                        models.push({id: key, title: value.title, completed: value.completed, createdAt: value.createdAt});
                    });
                    return models;
                }

                return [];
            },

            comparator: function(todo){
                return [todo.get('completed'), todo.get('createdAt')];
            }
        });
        return TodosCollection;
    }
);