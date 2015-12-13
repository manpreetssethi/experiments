/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/collections/PodcastsSearchResultsCollection',
    ['podlists/collections/BaseCollection', 'podlists/helpers/api.config', 'podlists/models/PodcastModel'],
    function(BaseCollection, apiConfig, PodcastModel) {
        var PodcastsSearchResultsCollection = BaseCollection.extend({
            url: apiConfig.podcasts.search,

            model: PodcastModel,

            parse: function(response) {
                if(response.fail === false) {
                    // TODO: maintain paging vars
                    return response.data.results;
                }

                return [];
            },
        });

        return PodcastsSearchResultsCollection;
    }
)