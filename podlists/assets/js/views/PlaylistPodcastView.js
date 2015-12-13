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

            className: function(){
                return PodcastView.prototype.className+' playlist-podcast-view-container';
            },

            initialize: function(options) {
                PodcastView.prototype.initialize.call(this, options);

                this.render();

                this.listenToOnce(this.model, 'sync', this.render, this);

                this.model.fetch();
            }
        });
        return PlaylistPodcastView;

    }
);