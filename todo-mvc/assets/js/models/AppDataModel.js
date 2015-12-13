/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/models/AppDataModel', ['podlists/models/BaseModel'], function(BaseModel){
    var AppDataModel = BaseModel.extend({
        defaults: {
            playlistsCollection: null,
            podcastsCollection: null,
            audioPlayerModel: null,
            userModel: null,
        }
    });
    return AppDataModel;
});