/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PlaylistPodcastsView',
    [
        'underscore',
        'text!podlists/templates/playlist-podcasts-view-template.html',
        'podlists/views/BaseView',
        'podlists/views/PlaylistPodcastView'
    ],
    function(
        _,
        viewTemplate,
        BaseView,
        PlaylistPodcastView
    ){
        var PlaylistPodcastsView = BaseView.extend({
            className: 'playlists-podcasts-view-container',

            template: _.template(viewTemplate),

            events: {
                'click a.close' : 'handleClickOnCloseButton'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render()
                    .fadeModalIn()
                    .stopBodyFromScrolling();

                // Render models
                this.collection.each(this.renderPlaylistPodcast, this);
            },

            render: function() {
                this.$el.html(this.template(this.options.playlistModel.toJSON()));
                return this;
            },

            renderPlaylistPodcast: function(model) {
                this.$el.find('.ppsvc-list').append(new PlaylistPodcastView({model: model}).el);
                return this;
            },

            close: function() {
                this.letBodyScroll();
                BaseView.prototype.close.call(this);
            }
        });
        return PlaylistPodcastsView;
    }
);