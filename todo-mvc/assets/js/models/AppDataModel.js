/**
 * Created by manpreet on 11/12/15.
 */
define('todomvc/models/AppDataModel', ['todomvc/models/BaseModel'], function(BaseModel){
    var AppDataModel = BaseModel.extend({
        defaults: {
            todosCollection: null
        }
    });
    return AppDataModel;
});