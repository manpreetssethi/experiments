/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PodcastView',
    ['jquery', 'underscore', 'podlists/views/BaseView'],
    function($, _, BaseView) {
        var PodcastView = BaseView.extend({
            template: function(templateItems){
                return _.template($('#podcast-view-template').html())(templateItems);
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return PodcastView;
    }
)