/**
 * Created by manpreet on 11/12/15.
 */
define(
    'podlists/views/SearchPodcastsView',
    [
        'text!podlists/templates/search-podcasts-view-template.html',
        'text!podlists/templates/search-podcasts-feedback-template.html',
        'podlists/views/BaseView',
        'podlists/views/PodcastSearchResultView'
    ],
    function(
        viewTemplate,
        feedbackTemplate,
        BaseView,
        PodcastSearchResultView
    ){
        var SearchPodcastsView = BaseView.extend({
            template: _.template(viewTemplate),

            className: 'search-podcasts-view-container',

            events: {
                'submit form': 'handleFormSubmission'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                this.render();

                // When searching
                this.listenTo(this.collection, 'request', function(){
                    this.renderFeedback('hang on..')
                }, this);

                // When search results are added
                this.listenTo(this.collection, 'sync', this.renderSearchResults, this);

                // When there's an error
                this.listenTo(this.collection, 'error', function(){}, this);
            },

            render: function() {
                this.$el.html(this.template());
                return this;
            },

            renderSearchResults: function(collection) {
                if(collection.length > 0) {
                    this.clearFeedback();
                    collection.each(this.renderSearchResult, this);
                } else {
                    this.renderFeedback('no results found, have you tried looking for love?');
                }
                return this;
            },

            renderFeedback: function(message) {
                var _template = _.template(feedbackTemplate);
                this.$el.find('.spvc-results-list').html(_template({message: message}));
                return this;
            },

            clearFeedback: function() {
                this.$el.find('.spvc-feedback-message').remove();
                return this;
            },

            renderSearchResult: function(model) {
                this.appendSearchResult(new PodcastSearchResultView({model: model}).el);
                return this;
            },

            appendSearchResult: function(el) {
                this.$el.find('.spvc-results-list').append(el);
                return this;
            },

            search: function(q) {
                this.collection.fetch({
                    data: {q: q}
                });
                return this;
            },

            getSearchQuery: function() {
                return this.$el.find('input[name="q"]').val();
            },

            isThereASearchQuery: function() {
                if($.trim(this.getSearchQuery()) === '') {
                    return false;
                }
                return true;
            },

            handleFormSubmission: function(e) {
                e.preventDefault();
                if(this.isThereASearchQuery()) {
                    this.search(this.getSearchQuery());
                }
                return this;
            }
        });
        return SearchPodcastsView;

    }
);