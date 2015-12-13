/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/PodcastView',
    [
        'jquery',
        'underscore',
        'text!podlists/templates/podcast-view-template.html',
        'podlists/views/BaseView'
    ],
    function(
        $,
        _,
        viewTemplate,
        BaseView
    ) {
        var PodcastView = BaseView.extend({
            className: 'podcast-view-container',

            template: function(templateItems){
                return _.template(viewTemplate)(templateItems);
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