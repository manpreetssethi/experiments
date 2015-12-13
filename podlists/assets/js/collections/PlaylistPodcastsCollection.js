/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/collections/PlaylistPodcastsCollection', ['podlists/collections/BaseCollection', 'podlists/helpers/api.config', 'podlists/models/PlaylistPodcastModel'], function(BaseCollection, apiConfig, PlaylistPodcastModel){
    var PlaylistPodcastsCollection = BaseCollection.extend({
        //url: apiConfig.podcasts.all,
        url: '//experiments.local:3000/api/podcasts',
        model: PlaylistPodcastModel
    });
    return PlaylistPodcastsCollection;
});