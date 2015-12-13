/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AddPodcastToPlaylistsView',
    [
        'podlists/views/BaseView',
        'podlists/views/AddPodcastToPlaylistView',
        'podlists/views/PodcastView',
    ],
    function(BaseView, AddPodcastToPlaylistView, PodcastView) {
        var AddPodcastToPlaylistsView = BaseView.extend({
            className: 'add-podcast-to-playlists-view-container',

            template: _.template($('#add-podcast-to-playlists-view-template').html()),

            events: {
                'click button.close' : 'handleClickOnCloseButton'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render()
                    .renderPodcastView(this.model)
                    .fadeIn();

                this.options.playlistsCollection.each(this.renderAddPodcastToPlaylistView, this);
            },

            render: function() {
                this.$el.html(this.template());
                return this;
            },

            renderPodcastView: function(model) {
                this.$el.find('.modal-content').prepend(new PodcastView({model: model}).el);
                return this;
            },

            renderAddPodcastToPlaylistView: function(model) {
                this.$el.find('.aptpvc-playlists').append(new AddPodcastToPlaylistView({model: model, podcastModel: this.model}).el);
                return this;
            },

            handleClickOnCloseButton: function() {
                this.close();
                return this;
            },

            fadeIn: function() {
                this.$el.find('.modal').show().addClass('in');
                return this;
            }
        });

        return AddPodcastToPlaylistsView;
    }
)
