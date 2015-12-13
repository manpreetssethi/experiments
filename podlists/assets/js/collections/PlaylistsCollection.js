/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/collections/PlaylistsCollection',
    [
        'podlists/collections/BaseCollection',
        'podlists/helpers/api.config',
        'podlists/models/PlaylistModel'
    ],
    function(
        BaseCollection,
        apiConfig,
        PlaylistModel
    ){
        var PlaylistsCollection = BaseCollection.extend({
            //url: apiConfig.playlists.all,
            url: '//experiments.local:3000/api/playlists',

            model: PlaylistModel,

            parse: function(response) {
                var models = [];
                if(response.fail === false) {
                    _.each(response.data, function(value, key){
                        models.push({id: key, name: value.name, podcasts: value.podcasts});
                    });
                    return models;
                }

                return [];
            },
        });
        return PlaylistsCollection;
    }
);