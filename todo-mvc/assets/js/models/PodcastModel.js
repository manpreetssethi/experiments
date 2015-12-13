/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/models/PodcastModel', ['podlists/models/BaseModel', 'podlists/helpers/podcastData.map'], function(BaseModel, podcastDataMap){
    var PodcastModel = BaseModel.extend({
        defaults: {
            id: null,
            title: null,
            tags: null,
            network: null,
            audioFiles: null,
            thumbImage: null,
            fullImage: null
        },

        parse: function(response) {
            var _attrs = {};

            try {
                var _tags = (typeof response.tags !== 'undefined' && typeof response.tags === 'object' ? response.tags.join(', ') : null);
                _attrs = {
                    id: response.id,
                    title: response.title,
                    tags: _tags,
                    network: response.network,
                    thumbImage: response.image_urls.thumb,
                    fullImage: response.image_urls.full
                };
            } catch(e) {
                // log error
            }

            return _attrs;
        }
    });
    return PodcastModel;
});
