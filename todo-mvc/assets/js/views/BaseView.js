/**
 * @file Implements functionality used by all views
 * @author Manpreet Sethi
 * @exports todomvc/views/BaseView
 * @namespace BaseView
 * Created by manpreet on 11/12/15.
 */
define('todomvc/views/BaseView', ['backbone'], function(Backbone){
	var View = Backbone.View.extend({
        /**
         *
         * @param options
		 * @memberof BaseView
         */
        initialize: function(options) {
            this.options = options || {};
            Backbone.View.prototype.initialize.call(this, options);
        },

        /**
         *
         * @param msg
		 * @memberof BaseView
         * @returns {View}
         */
        showErrorMessage: function(msg) {
            alert(msg);
            return this
        },

        /**
         *
		 * @memberof BaseView
         */
        close: function() {
            this.unbind().remove();
        }
    });
    return View;
});