/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AddPodcastToPlaylistsView',
    [
        'text!podlists/templates/add-podcast-to-playlists-view-template.html',
        'podlists/views/BaseView',
        'podlists/views/AddPodcastToPlaylistView',
        'podlists/views/PodcastView',
    ],
    function(
        viewTemplate,
        BaseView,
        AddPodcastToPlaylistView,
        PodcastView
    ) {
        var AddPodcastToPlaylistsView = BaseView.extend({
            className: 'add-podcast-to-playlists-view-container',

            template: _.template(viewTemplate),

            events: {
                'click button.close' : 'handleClickOnCloseButton'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render()
                    .renderPodcastView(this.model)
                    .fadeModalIn()
                    .stopBodyFromScrolling();

                this.options.playlistsCollection.each(this.renderAddPodcastToPlaylistView, this);
            },

            render: function() {
                this.$el.html(this.template());
                return this;
            },

            renderPodcastView: function(model) {
                this.$el.find('.aptpvc-podcast').html(new PodcastView({model: model}).el);
                return this;
            },

            renderAddPodcastToPlaylistView: function(model) {
                this.$el.find('.aptpvc-playlists').prepend(new AddPodcastToPlaylistView({model: model, podcastModel: this.model}).el);
                return this;
            },

            handleClickOnCloseButton: function() {
                this.close();
                return this;
            },

            close: function() {
                this.letBodyScroll();
                BaseView.prototype.close.call(this);
            }
        });

        return AddPodcastToPlaylistsView;
    }
)
