/**
 * Created by manpreet on 12/12/15.
 */
define(
    'todomvc/libraries/EventEmitter',
    [
        'backbone'
    ],
    function(Backbone) {
        var EventEmitter = function() {};

        _.extend(EventEmitter.prototype, Backbone.Events);

        return EventEmitter;
    }
)