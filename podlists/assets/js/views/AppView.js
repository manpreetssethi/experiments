/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AppView',
    [
        'text!podlists/templates/app-view-template.html',
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
        viewTemplate,
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
            playlistPodcastsView: null,

            template: _.template(viewTemplate),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                this.render();
                this.renderPlaylistsView(this.model.get('playlistsCollection'));
                this.renderCreatePlaylistView(this.model.get('playlistsCollection'));
                this.renderSearchPodcastsView(new PodcastsSearchResultsCollection());

                // Mediate for events triggered on the EventBus
                podlistsApp.eventBus.on('ADD-PODCAST-TO-PLAYLIST', function(payload){
                    this.renderAddPodcastToPlaylistView(payload, this.model.get('playlistsCollection'));
                }, this);
            },

            render: function() {
                this.$el.html(this.template({}));
                return this;
            },

            renderPlaylistsView: function(collection) {
                this.$el.find('.ac-content .ac-c-playlists-list').html(new PlaylistsView({collection: collection}).el);
                return this;
            },

            renderPlaylistPodcastsView: function(playlistId) {
                this.closePlaylistPodcastsView();

                var playlistModel = this.model.get('playlistsCollection').get(playlistId);

                // Reference not available
                if(typeof playlistModel === 'undefined') {
                    return this;
                }

                var playlistPodcastsCollection = new PlaylistPodcastsCollection();

                // Populate by podcast ids in playlist
                playlistPodcastsCollection.add(_.map(playlistModel.get('podcasts'), function(id){
                    return {id: id};
                }));

                var playlistPodcastsView = new PlaylistPodcastsView({
                    collection: playlistPodcastsCollection,
                    playlistModel: playlistModel
                });

                this.$el.append(playlistPodcastsView.el);

                this.playlistPodcastsView = playlistPodcastsView;

                return this;
            },

            renderCreatePlaylistView: function(collection) {
                this.$el.find('.ac-content .ac-c-create-playlist-form').html(new CreatePlaylistView({collection: collection}).el);
                return this;
            },

            renderSearchPodcastsView: function(collection) {
                this.$el.find('.ac-content .ac-c-search-podcasts-form').html(new SearchPodcastsView({collection: collection}).el);
                return this;
            },

            renderAddPodcastToPlaylistView: function(model, playlistsCollection) {
                var view = new AddPodcastToPlaylistsView({
                    model: model,
                    playlistsCollection: playlistsCollection
                });
                this.$el.append(view.el);
                return this;
            },

            closePlaylistPodcastsView: function() {
                if(this.playlistPodcastsView != null) {
                    this.playlistPodcastsView.close();
                    this.playlistPodcastsView = null;
                };
                return this;
            },
        });
        return AppView;
    }
);