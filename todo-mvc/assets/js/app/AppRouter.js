/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/app/AppRouter',
    ['backbone', 'podlists/app/podlistsApp'],
    function(Backbone, podlistsApp) {
        var AppRouter = Backbone.Router.extend({
            initialize: function(options) {
                this.options = options || {};
            },

            routes: {
                '' : 'cleanup',
                'playlists/:id/view' : 'viewPlaylist'
            },

            cleanup: function() {
                podlistsApp.view.closePlaylistPodcastsView();
            },

            viewPlaylist: function(playlistId) {
                podlistsApp.view.renderPlaylistPodcastsView(playlistId);
            }
        });

        return AppRouter;
    }
);