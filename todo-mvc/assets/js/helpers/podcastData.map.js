/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/helpers/podcastData.map', [], function() {
    var attrsMapping = {
        'id': 'id',
        'title': 'title',
        'tags': 'tags',
        'network': 'network',
        'image_urls' :'thumbImage',
        'image_urls.full': 'fullImage'
    };

    return attrsMapping;
});