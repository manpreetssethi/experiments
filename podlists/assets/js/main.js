/**
 * Created by manpreet on 11/12/15.
 */
require(
    [
        'podlists/app/podlistsApp',
        'podlists/app/AppRouter',
        'podlists/models/AppDataModel',
        'podlists/collections/PlaylistsCollection',
        'podlists/views/AppView',
        'podlists/libraries/EventEmitter'
    ],
    function(
        podlistsApp,
        AppRouter,
        AppDataModel,
        PlaylistsCollection,
        AppView,
        EventEmitter
    ){
        var _data = new AppDataModel({
            playlistsCollection: new PlaylistsCollection(),
            podcastsCollection: null,
            audioPlayerModel: null,
            userModel: null
        });

        podlistsApp.data        = _data;
        podlistsApp.eventBus    = new EventEmitter();
        podlistsApp.router      = new AppRouter();
        podlistsApp.view        = new AppView({model: _data});

        // fetch playlists and start the history
        var playlistsCollection = podlistsApp.data.get('playlistsCollection');
        playlistsCollection.fetch({
            success: function() {
                podlistsApp.startHistory();
            }
        })

        // Insert app view in the body
        $('.container').html(podlistsApp.view.el);
    }
);