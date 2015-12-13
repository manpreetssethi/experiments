/**
 * Created by manpreet on 11/12/15.
 */
define('todomvc/models/TodoModel', ['todomvc/models/BaseModel'], function(BaseModel){
    var TodoModel = BaseModel.extend({
        defaults: {
            id: null,
            title: null,
            completed: false,
            createdAt: null
        },

        validate: function(attrs) {
            if(attrs.title === '') {
                return 'Provide a task title!';
            }
        }
    });
    return TodoModel;
});