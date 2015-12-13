/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AppView',
    [
        'podlists/app/podlistsApp',
        'podlists/views/BaseView',
        'podlists/views/PlaylistsView',
        'podlists/views/CreatePlaylistView',
        'podlists/views/PlaylistPodcastsView',
        'podlists/collections/PlaylistPodcastsCollection',
        'podlists/collections/PodcastsSearchResultsCollection',
        'podlists/views/SearchPodcastsView',
        'podlists/views/AddPodcastToPlaylistsView'
    ],
    function(
        podlistsApp,
        BaseView,
        PlaylistsView,
        CreatePlaylistView,
        PlaylistPodcastsView,
        PlaylistPodcastsCollection,
        PodcastsSearchResultsCollection,
        SearchPodcastsView,
        AddPodcastToPlaylistsView
    ){
        var AppView = BaseView.extend({
            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();

                podlistsApp.eventBus.on('ADD-PODCAST-TO-PLAYLIST', function(payload){
                    this.renderAddPodcastToPlaylistView(payload, this.model.get('playlistsCollection'));
                }, this);
            },

            playlistPodcastsView: null,

            render: function() {
                this.renderPlaylistsView(this.model.get('playlistsCollection'));
                this.renderCreatePlaylistView(this.model.get('playlistsCollection'));
                this.renderSearchPodcastsView(new PodcastsSearchResultsCollection());
            },

            renderPlaylistsView: function(collection) {
                this.$el.find('.ac-content .ac-c-playlists-list').html(new PlaylistsView({collection: collection}).el);
                return this;
            },

            renderPlaylistPodcastsView: function(playlistId) {
                this.closePlaylistPodcastsView();

                var playlistModel = this.model.get('playlistsCollection').get(playlistId);
                var playlistPodcastsCollection = new PlaylistPodcastsCollection();

                // Populate by podcast ids in playlist
                playlistPodcastsCollection.add(_.map(playlistModel.get('podcasts'), function(id){
                    return {id: id};
                }));

                var playlistPodcastsView = new PlaylistPodcastsView({
                    collection: playlistPodcastsCollection,
                    playlistModel: playlistModel
                });

                this.$el.find('.ac-content .ac-c-playlist-podcasts-list').html(playlistPodcastsView.el);

                this.playlistPodcastsView = playlistPodcastsView;

                return this;
            },

            closePlaylistPodcastsView: function() {
                if(this.playlistPodcastsView != null) {
                    this.playlistPodcastsView.close();
                    this.playlistPodcastsView = null;
                };
                return this;
            },

            renderCreatePlaylistView: function(collection) {
                var view = new CreatePlaylistView({collection: collection, el: this.$el.find('.ac-content .ac-c-create-playlist-form')});
                return this;
            },

            renderSearchPodcastsView: function(collection) {
                return new SearchPodcastsView({collection: collection, el: this.$el.find('.ac-content .search-podcasts-view-container')});
            },

            renderAddPodcastToPlaylistView: function(model, playlistsCollection) {
                var view = new AddPodcastToPlaylistsView({
                    model: model,
                    playlistsCollection: playlistsCollection
                });
                this.$el.append(view.el);
                return this;
            }
        });
        return AppView;
    }
);