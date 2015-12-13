/**
 * Created by manpreet on 12/12/15.
 */
define('podlists/helpers/api.config', function(){
    var _base = '//experiments.local:3000/api';
    return {
        playlists: {
            all: _base+'/playlists'
        },
        podcasts: {
            all: _base+'/podcasts',
            search: _base+'/podcasts/search',
        }
    };
});