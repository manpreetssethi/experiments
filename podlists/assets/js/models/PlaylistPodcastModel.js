/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/models/PlaylistPodcastModel', ['podlists/models/PodcastModel'], function(PodcastModel){
    var PlaylistPodcastModel = PodcastModel.extend({
        parse: function(response) {
            var _attrs = {};
            
            try {
                var _tags = this.parseTags(response); // Tags
                var _images = this.parseImageFiles(response); // Images
                var _audioFiles = this.parseAudioFiles(response); // Audio

                _attrs = {
                    id: response.data.id,
                    title: response.data.title,
                    tags: _tags,
                    network: response.data.network,
                    thumbImage: _images.thumbImage,
                    fullImage: _images.fullImage,
                    audioFiles: _audioFiles
                };
            } catch(e) {
                // log error
            }

            return _attrs;
        },

        parseTags: function(response) {
            var _tags = (typeof response.data.tags !== 'undefined' && typeof response.data.tags === 'object' ? response.data.tags.join(', ') : null);
            return _tags;
        },

        parseImageFiles: function(response) {
            // Images
            var _thumbImage = null,
                _fullImage = null;

            var _imageFiles = _.first(response.data.image_files);

            if(typeof _imageFiles !== 'undefined' && typeof _imageFiles.url !== 'undefined') {
                _thumbImage = _imageFiles.url.thumb;
                _fullImage = _imageFiles.url.full;
            }

            return {thumbImage: _thumbImage, fullImage: _fullImage};
        },

        parseAudioFiles: function(response) {
            return _.map(response.data.audio_files, function(attrs){
                var _fileUrl = _.first(attrs.url);

                if(typeof _fileUrl === 'undefined') {
                    _fileUrl = null;
                }

                return {
                    duration: attrs.duration,
                    fileUrl: _fileUrl,
                    id: attrs.id,
                    urlTitle: 'untitled file'
                };
            });
        },
    });
    return PlaylistPodcastModel;
});
