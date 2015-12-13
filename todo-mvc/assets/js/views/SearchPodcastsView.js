/**
 * Created by manpreet on 11/12/15.
 */
define(
    'podlists/views/SearchPodcastsView',
    [
        'podlists/views/BaseView',
        'podlists/views/PodcastSearchResultView'
    ],
    function(
        BaseView,
        PodcastSearchResultView
    ){
        var SearchPodcastsView = BaseView.extend({
            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);

                // When searching
                this.listenTo(this.collection, 'request', this.showRequestFeedback, this);

                // When search results are added
                this.listenTo(this.collection, 'sync', function(collection){
                    this.hideRequestFeedback();
                    this.renderSearchResults(collection);
                }, this);

                // When there's an error
                this.listenTo(this.collection, 'error', function(){}, this);
            },

            events: {
                'submit form': 'handleFormSubmission'
            },

            renderSearchResults: function(collection) {
                collection.each(this.renderSearchResult, this);
            },

            renderSearchResult: function(model) {
                this.appendSearchResult(new PodcastSearchResultView({model: model}).el);
                return this;
            },

            showRequestFeedback: function() {
                this.$el.find('.spvc-request-feedback').removeClass('hide');
                return this;
            },

            hideRequestFeedback: function() {
                this.$el.find('.spvc-request-feedback').addClass('hide');
                return this;
            },

            showErrorFeedback: function() {
                this.$el.find('.spvc-error-feedback').removeClass('hide');
                return this;
            },

            hideErrorFeedback: function() {
                this.$el.find('.spvc-error-feedback').addClass('hide');
                return this;
            },

            clearSearchResults: function() {
                this.$el.find('.spvc-results-list>div').remove();
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

            handleFormSubmission: function(e) {
                e.preventDefault();
                this.clearSearchResults();
                this.hideRequestFeedback();
                this.hideErrorFeedback();
                this.search(this.$el.find('input[name="q"]').val());
                return this;
            }
        });
        return SearchPodcastsView;

    }
);