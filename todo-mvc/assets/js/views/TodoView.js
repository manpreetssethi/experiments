/**
 * Created by manpreet on 11/12/15.
 */
define(
    'todomvc/views/TodoView',
    [
        'underscore',
        'todomvc/views/BaseView',
        'text!todomvc/templates/todo-view-template.html'
    ],
    function(
        _,
        BaseView,
        viewTemplate
    ){
        var TodoView = BaseView.extend({
            tagName: 'li',

            className: 'todo-view-container',

            template: _.template(viewTemplate),

            events: {
                'change input[name="completed"]' : 'handleChangeInCompletedCheckbox'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();

                // When the model is updated
                this.listenTo(this.model, 'sync', this.render, this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            handleChangeInCompletedCheckbox: function(e) {
                this.updateCompleted(e.currentTarget.checked);
                return this;
            },

            updateCompleted: function(value) {
                try {
                    this.model.save({
                        completed: value
                    });
                } catch(e) {
                    // log error
                    throw new Error('could not save model');
                }
                return this;
            }
        });
        return TodoView;
    }
);