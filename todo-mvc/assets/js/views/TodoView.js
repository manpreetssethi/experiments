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
                'change input[name="completed"]' : 'handleChangeInCompletedCheckbox',
                'click' : 'handleClickInTitle'
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
                this.updateTask(e.currentTarget.checked);
                return this;
            },

            handleClickInTitle: function(e) {
                alert('hi');
                this.$el.find('input[name="title"]').removeAttr('disabled');
                return this;
            },

            updateTask: function(value) {
                try {
                    if(value) {
                        this.model.markAsDone();
                    } else {
                        this.model.markAsPending();
                    }

                    this.model.save();
                } catch(e) {
                    // log error & let the user know
                    throw new Error('could not update the task');
                }
                return this;
            }
        });
        return TodoView;
    }
);