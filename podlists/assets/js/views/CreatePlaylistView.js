/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/CreatePlaylistView',
    [
        'text!podlists/templates/create-playlist-view-template.html',
        'podlists/views/BaseView'
    ],
    function(
        viewTemplate,
        BaseView
    ){
        var CreatePlaylistView = BaseView.extend({
            className: 'create-playlist-view-container',

            events: {
                'submit form': 'handleFormSubmissionEvent',
                'focus input[name="playlist-name"]' : 'handleFocusOnPlaylistNameField',
                'blur input[name="playlist-name"]' : 'handleBlurInPlaylistNameField',
            },

            template: _.template(viewTemplate),

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.render();
            },

            render: function() {
                this.$el.html(this.template({}));
                return this;
            },

            handleFormSubmissionEvent: function(e) {
                e.preventDefault();
                this.savePlaylist(this.$el.find('input[name="playlist-name"]').val());
                return this;
            },

            handleFocusOnPlaylistNameField: function(e) {
                this.showInformationBlock();
                return this;
            },

            handleBlurInPlaylistNameField: function(e) {
                this.hideInformationBlock();
                return this;
            },

            showInformationBlock: function() {
                this.$el.find('.cpvc-information-block').addClass('open');
                return this;
            },

            hideInformationBlock: function() {
                this.$el.find('.cpvc-information-block').removeClass('open');
                return this;
            },

            savePlaylist: function(name) {
                if(typeof name === 'undefined') {
                    this.showErrorMessage('Provide a name!');
                }

                var model = this.collection.create({name: name}, {wait: true});

                if(typeof model === 'object' && !model.isValid()) {
                    this.showErrorMessage('Provide a name!');
                    return this;
                }

                this.reset();

                return this;
            },

            reset: function() {
                this.resetPlaylistNameField();
                return this;
            },

            resetPlaylistNameField: function() {
                this.$el.find('input[name="playlist-name"]').val("");
                return this;
            }
        });

        return CreatePlaylistView;
    }
);