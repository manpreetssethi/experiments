/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PlaylistPodcastView',
    [
        'jquery',
        'underscore',
        'podlists/views/PodcastView'
    ],
    function(
        $,
        _,
        PodcastView
    ) {
        var PlaylistPodcastView = PodcastView.extend({
            tagName: 'div',

            className: 'playlist-podcast-view-container',

            initialize: function(options) {
                PodcastView.prototype.initialize.call(this, options);

                this.render();

                this.listenToOnce(this.model, 'sync', this.render, this);

                this.model.fetch();
            },

            //template: function(templateItems) {
            //    var _superTemplate = PodcastView.prototype.template(templateItems);
            //    var _myTemplate = _.template($('#podcast-search-result-view-template').html())(templateItems);
            //    return _superTemplate+"\n"+_myTemplate;
            //},

            handleClickOnAddToPlaylistButton: function(e) {
                this.addToPlaylist();
                return this;
            },

            addToPlaylist: function() {
                podlistsApp.eventBus.trigger('ADD-PODCAST-TO-PLAYLIST', this.model);
                return this;
            }
        });
        return PlaylistPodcastView;

    }
);