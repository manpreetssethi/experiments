/**
 * @file Implements functionality that controls the app
 * @author Manpreet Sethi
 * @exports todomvc/views/AppView
 * @namespace AppView
 * Created by manpreet on 11/12/15.
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
            /**
             *
             * @memberof AppView
             */
            template: _.template(viewTemplate),

            /**
             *
             * @memberof AppView
             */
            className: 'app-view-container',

            /**
             *
             * @param options {object} set of options required to intialize
             * @param options.x {string} test x
             * @param options.y {integer} test y
             * @memberof AppView
             */
            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                if(this.model === null || this.model.get('todosCollection') === null) {
                    throw new Error('Missing data');
                }

                this.render();

                // just in case there's an error :s
                this.listenTo(this.model.get('todosCollection'), 'error', function(){
                    this.showErrorMessage('An unknown error occurred!');
                });
            },

            /**
             *
             * @memberof AppView
             * @returns {AppView}
             */
            render: function() {
                this.$el.html(this.template({}));
                this.$el.find('.ac-content .ac-c-todos-list').html(this.renderTodosView());
                this.$el.find('.ac-content .ac-c-create-todo-form').html(this.renderCreateTodoView());
                return this;
            },

            /**
             *
             * @memberof AppView
             * @returns {*}
             */
            renderTodosView: function() {
                var collection = this.model.get('todosCollection');
                return new TodosView({collection: collection}).el;
            },

            /**
             *
             * @memberof AppView
             * @returns {*}
             */
            renderCreateTodoView: function() {
                var collection = this.model.get('todosCollection');
                return new CreateTodoView({collection: collection}).el;
            }
        });
        return AppView;
    }
);