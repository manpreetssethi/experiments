/**
 * Created by manpreet on 12/12/15.
 */
define(
    'podlists/views/CreatePlaylistView',
    [
        'podlists/views/BaseView',
        'podlists/models/PlaylistModel'
    ],
    function(
        BaseView,
        PlaylistModel
    ){
        var CreatePlaylistView = BaseView.extend({
            events: {
                'submit form': 'handleFormSubmissionEvent'
            },

            handleFormSubmissionEvent: function(e) {
                e.preventDefault();
                this.savePlaylist(this.$el.find('input[name="playlist-name"]').val());
                return this;
            },

            savePlaylist: function(name) {
                this.disableSubmitButton();

                var model = this.collection.create({
                    name: name
                }, {wait: true});

                if(!model.isValid()) {
                    alert(model.validationError);
                } else {
                    this.reset();
                }

                this.enableSubmitButton();
                return this;
            },

            disableSubmitButton: function() {
                this.$el.find('input[type="submit"]').attr('disabled', true);
                return this;
            },

            enableSubmitButton: function() {
                this.$el.find('input[type="submit"]').removeAttr('disabled');
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