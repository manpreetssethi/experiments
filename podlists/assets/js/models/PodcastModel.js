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
                var _tags = this.parseTags(response); // Tags
                var _audioFiles = this.parseAudioFiles(response); // Audio

                _attrs = {
                    id: response.id,
                    title: response.title,
                    tags: _tags,
                    network: response.network,
                    thumbImage: response.image_urls.thumb,
                    fullImage: response.image_urls.full,
                    audioFiles: _audioFiles
                };
            } catch(e) {
                // log error
                throw new Error(e);
            }

            return _attrs;
        },

        parseTags: function(response) {
            var _tags = (typeof response.tags !== 'undefined' && typeof response.tags === 'object' ? response.tags.join(', ') : null);
            return _tags;
        },

        parseAudioFiles: function(response) {
            return _.map(response.audio_files, function(attrs){
                return {
                    duration: attrs.duration,
                    fileUrl: attrs.mp3 ? attrs.mp3 : (attrs.ogg ? attrs.ogg : null),
                    id: attrs.id,
                    urlTitle: attrs.url_title
                };
            });
        }
    });
    return PodcastModel;
});
