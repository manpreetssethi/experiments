/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/views/BaseView', ['backbone'], function(Backbone){
    var View = Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
            Backbone.View.prototype.initialize.call(this, options);
        },

        fadeModalIn: function() {
            this.$el.find('.modal').show().addClass('in');
            return this;
        },

        stopBodyFromScrolling: function() {
            $('body').addClass('no-scroll');
            return this;
        },

        letBodyScroll: function() {
            $('body').removeClass('no-scroll');
            return this;
        },

        showErrorMessage: function(msg) {
            alert(msg);
            return this
        },

        close: function() {
            this.unbind().remove();
        }
    });
    return View;
});