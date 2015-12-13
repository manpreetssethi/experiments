/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/views/BaseView', ['backbone'], function(Backbone){
    var View = Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
            Backbone.View.prototype.initialize.call(this, options);
        },

        close: function() {
            this.unbind().remove();
        }
    });
    return View;
});