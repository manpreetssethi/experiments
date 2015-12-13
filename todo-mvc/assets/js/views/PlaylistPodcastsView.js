/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PlaylistPodcastsView',
    [
        'underscore',
        'podlists/views/BaseView',
        'podlists/views/PlaylistPodcastView'
    ],
    function(
        _,
        BaseView,
        PlaylistPodcastView
    ){
        var PlaylistPodcastsView = BaseView.extend({
            className: 'playlists-podcasts-view-container',

            template: _.template($('#playlist-podcasts-template').html()),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();
                this.collection.each(this.renderPlaylistPodcast, this);
            },

            render: function() {
                this.$el.html(this.template(this.options.playlistModel.toJSON()));
                return this;
            },

            renderPlaylistPodcast: function(model) {
                this.$el.append(new PlaylistPodcastView({model: model}).el);
                return this;
            }
        });
        return PlaylistPodcastsView;
    }
);