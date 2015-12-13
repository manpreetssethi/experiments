/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/AddPodcastToPlaylistView',
    [
        'text!podlists/templates/add-podcast-to-playlist-view-template.html',
        'podlists/views/BaseView',
    ],
    function(viewTemplate, BaseView) {
        var AddPodcastToPlaylistView = BaseView.extend({
            className: 'add-podcast-to-playlist-view-container',

            template: _.template(viewTemplate),

            events: {
                'click button[name="aptpvc-add-to-playlist"]' : 'handleClickOnAddToPlaylistButton'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();

                // Once added
                this.listenToOnce(this.model, 'sync', this.render, this);
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

            addToPlaylist: function() {
                this.model.addPodcast(this.options.podcastModel.get('id'));
                this.model.save();
                return this;
            },
        });

        return AddPodcastToPlaylistView;
    }
)