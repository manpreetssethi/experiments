/**
 * Created by manpreet on 12/12/15.
 */
define('todomvc/helpers/api.config', function(){
    var _base = '//experiments.local:3000/api';
    return {
        todos: {
            all: _base+'/todos'
        }
    };
});