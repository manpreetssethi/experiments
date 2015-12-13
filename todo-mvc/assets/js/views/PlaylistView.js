/**
 * Created by manpreet on 11/12/15.
 */
define('podlists/views/PlaylistView', ['underscore', 'podlists/views/BaseView'], function(_, BaseView){
    var PlaylistView = BaseView.extend({
        tagName: 'li',

        template: _.template('<a href="#playlists/<%=id%>/view"><%=name%></a>'),

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return PlaylistView;
});