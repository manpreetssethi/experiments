/**
 * Created by manpreet on 12/12/15.
 */
define(
    'todomvc/views/AppView',
    [
        'text!todomvc/templates/app-template.html',
        'todomvc/app/todoMVCApp',
        'todomvc/views/BaseView',
        'todomvc/views/TodosView',
        'todomvc/views/CreateTodoView'
    ],
    function(
        viewTemplate,
        todoMVCApp,
        BaseView,
        TodosView,
        CreateTodoView
    ){
        var AppView = BaseView.extend({
            template: _.template(viewTemplate),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                if(this.model === null || this.model.get('todosCollection') === null) {
                    throw new Error('Missing data');
                }

                this.render();

                // just incase there's an error :s
                this.listenTo(this.model.get('todosCollection'), 'error', function(){
                    this.showErrorMessage('An unknown error occurred!');
                });
            },

            render: function() {
                this.$el.html(this.template({}));

                this.$el.find('.ac-content .ac-c-todos-list').html(this.renderTodosView());
                this.$el.find('.ac-content .ac-c-create-todo-form').html(this.renderCreateTodoView());

                return this;
            },

            renderTodosView: function() {
                var collection = this.model.get('todosCollection');
                return new TodosView({collection: collection}).el;
            },

            renderCreateTodoView: function() {
                var collection = this.model.get('todosCollection');
                return new CreateTodoView({collection: collection}).el;
            }
        });
        return AppView;
    }
);