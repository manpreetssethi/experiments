/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/models/PlaylistPodcastModel', ['podlists/models/PodcastModel'], function(PodcastModel){
    var PlaylistPodcastModel = PodcastModel.extend({
        parse: function(response) {
            var _attrs = {};
            
            try {
                // Tags
                var _tags = (typeof response.data.tags !== 'undefined' && typeof response.data.tags === 'object' ? response.data.tags.join(', ') : null);

                // Images
                var _thumbImage = null,
                    _fullImage = null;
                
                var _imageFiles = _.first(response.data.image_files);

                if(typeof _imageFiles !== 'undefined' && typeof _imageFiles.url !== 'undefined') {
                    _thumbImage = _imageFiles.url.thumb;
                    _fullImage = _imageFiles.url.full;
                }

                _attrs = {
                    id: response.data.id,
                    title: response.data.title,
                    tags: _tags,
                    network: response.data.network,
                    thumbImage: _thumbImage,
                    fullImage: _fullImage
                };
            } catch(e) {
                // log error
            }

            return _attrs;
        }
    });
    return PlaylistPodcastModel;
});
