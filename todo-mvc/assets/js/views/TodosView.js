/**
 * Created by manpreet on 11/12/15.
 */
define(
    'todomvc/views/TodosView',
    [
        'todomvc/views/BaseView',
        'todomvc/views/TodoView'
    ],
    function(
        BaseView,
        TodoView
    ){
        var TodosView = BaseView.extend({
            tagName: 'ul',

            className: 'todos-view-container',

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                // When a new playlist is added, render it
                this.listenTo(this.collection, 'add', this.renderTodo, this);

                this.collection.fetch();
            },

            renderTodo: function(model) {
                this.$el.prepend(new TodoView({model: model}).el);
                return this;
            }
        });
        return TodosView;
    }
);