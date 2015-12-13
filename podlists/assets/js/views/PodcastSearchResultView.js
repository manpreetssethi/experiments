/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PodcastSearchResultView',
    [
        'jquery',
        'underscore',
        'podlists/views/PodcastView',
        'podlists/app/podlistsApp'
    ],
    function($, _, PodcastView, podlistsApp) {
        var PodcastSearchResultView = PodcastView.extend({
            tagName: 'div',

            className: 'podcast-search-result-view-container',

            template: function(templateItems) {
                var _superTemplate = PodcastView.prototype.template(templateItems);
                var _myTemplate = _.template($('#podcast-search-result-view-template').html())(templateItems);
                return _superTemplate+"\n"+_myTemplate;
            },

            events: {
                'click .psrvc-add-to-playlist-btn' : 'handleClickOnAddToPlaylistButton'
            },

            handleClickOnAddToPlaylistButton: function(e) {
                this.addToPlaylist();
                return this;
            },

            addToPlaylist: function() {
                podlistsApp.eventBus.trigger('ADD-PODCAST-TO-PLAYLIST', this.model);
                return this;
            }
        });
        return PodcastSearchResultView;
    }
)