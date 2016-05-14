/**
 * Created by manpreet on 12/12/15.
 */
define(
    'todomvc/views/CreateTodoView',
    [
        'text!todomvc/templates/create-todo-template.html',
        'todomvc/views/BaseView',
        'todomvc/models/TodoModel'
    ],
    function(
        viewTemplate,
        BaseView,
        TodoModel
    ){
        var CreateTodoView = BaseView.extend({
            className: 'create-todo-view-container',

            events: {
                'submit form': 'handleFormSubmissionEvent'
            },

            template: _.template(viewTemplate),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();
            },

            render: function() {
                this.$el.html(this.template({}));
                return this;
            },

            handleFormSubmissionEvent: function(e) {
                e.preventDefault();
                this.saveTodo(this.$el.find('input[name="todo-title"]').val());
                return this;
            },

            saveTodo: function(title) {
                if(typeof title === 'undefined') {
                    this.showErrorMessage('Provide a title!');
                }

                var model = this.collection.create({title: title}, {wait: true});

                if(typeof model === 'object' && !model.isValid()) {
                    this.showErrorMessage(model.validationError);
                    return this;
                }

                this.resetForm();
                
                return this;
            },

            resetForm: function() {
                this.resetTodoTitleField();
                return this;
            },

            resetTodoTitleField: function() {
                this.$el.find('input[name="todo-title"]').val("");
                return this;
            }
        });

        return CreateTodoView;
    }
);