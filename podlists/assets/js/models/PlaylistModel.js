/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/models/PlaylistModel', ['podlists/models/BaseModel'], function(BaseModel){
    var PlaylistModel = BaseModel.extend({
        defaults: {
            id: null,
            name: null,
            podcasts: []
        },

        validate: function(attrs) {
            if(attrs.name === '') {
                return 'Provide a name!';
            }
        },

        addPodcast: function(value, options) {
            return this.get('podcasts').push(value);
        },

        hasPodcast: function(value) {
            if(_.indexOf(this.get('podcasts'), value) === -1) {
                return false;
            }

            return true;
        }
    });
    return PlaylistModel;
});