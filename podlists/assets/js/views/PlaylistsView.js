/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/views/PlaylistsView', ['podlists/views/BaseView', 'podlists/views/PlaylistView'], function(BaseView, PlaylistView){
    var PlaylistsView = BaseView.extend({
        tagName: 'ul',

        className: 'playlists-view-container',

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);

            // When a new playlist is added, render it
            this.listenTo(this.collection, 'add', this.renderPlaylist, this);
        },

        renderPlaylists: function(collection) {
            collection.each(this.renderPlaylist, this);
            return this;
        },

        renderPlaylist: function(model) {
            this.$el.append(new PlaylistView({model: model}).el);
            return this;
        }
    });
    return PlaylistsView;
});