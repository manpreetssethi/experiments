/**
 * Created by manpreet on 11/12/15.
 */
define(
    'podlists/views/PlaylistView',
    [
        'underscore',
        'text!podlists/templates/playlist-view-template.html',
        'podlists/views/BaseView'
    ],
    function(_, viewTemplate, BaseView){
        var PlaylistView = BaseView.extend({
            tagName: 'li',

            className: 'playlist-view-container',

            template: _.template(viewTemplate),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                this.render();
                
                this.listenTo(this.model, 'change', this.render, this)
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return PlaylistView;

    }
);