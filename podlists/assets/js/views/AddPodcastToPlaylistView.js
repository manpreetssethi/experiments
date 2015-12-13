/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AddPodcastToPlaylistView',
    [
        'podlists/views/BaseView',
        'podlists/views/PodcastView',
    ],
    function(BaseView, PodcastView) {
        var AddPodcastToPlaylistView = BaseView.extend({
            className: 'add-podcast-to-playlist-view-container',

            template: _.template($('#add-podcast-to-playlist-view-template').html()),

            events: {
                'click button[name="aptpvc-add-to-playlist"]' : 'handleClickOnAddToPlaylistButton'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();

                // Disable the "Add" button once saving
                this.listenToOnce(this.model, 'sync', this.disableAddToPlaylistButton, this);
            },

            render: function() {
                var _addButtonIsDisabled = false;

                if(this.model.hasPodcast(this.options.podcastModel.get('id'))) {
                    _addButtonIsDisabled = true;
                }

                this.$el.html(this.template({
                    model: this.model.toJSON(),
                    addButtonIsDisabled: _addButtonIsDisabled
                }));
                return this;
            },

            handleClickOnAddToPlaylistButton: function(e) {
                this.addToPlaylist();
                return this;
            },

            disableAddToPlaylistButton: function() {
                this.$el.find('button[name="aptpvc-add-to-playlist"]').attr('disabled', true).text('added');
                return this;
            },

            addToPlaylist: function() {
                this.model.addPodcast(this.options.podcastModel.get('id'));
                this.model.save();
                return this;
            },
        });

        return AddPodcastToPlaylistView;
    }
)