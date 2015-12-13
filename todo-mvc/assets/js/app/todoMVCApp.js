/**
 * Created by manpreet on 12/12/15.
 */
define(
    [
        'backbone'
    ],
    function(Backbone){
        return {
            data: null,

            // App view
            view: null,

            // App router
            router: null,

            // Methods
            startHistory: function() {
                Backbone.history.start();
                return this;
            }
        };
    }
);