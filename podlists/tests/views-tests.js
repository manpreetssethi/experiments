/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'podlists/app/App',
        'podlists/views/BaseView',
        'podlists/views/AppView',
        'podlists/collections/PlaylistsCollection',
        'podlists/models/PlaylistModel',
        'podlists/views/PlaylistsView',
        'podlists/views/PlaylistView',
        'podlists/views/CreatePlaylistView',
        'podlists/views/SearchPodcastsView',
        'podlists/views/AudioPlayerView'
    ],
    function(
        App,
        BaseView,
        AppView,
        PlaylistsCollection,
        PlaylistModel,
        PlaylistsView,
        PlaylistView,
        CreatePlaylistView,
        SearchPodcastsView,
        AudioPlayerView
    ){
        var should = require('chai').should();
        var sinon = require('sinon');

        describe('App View', function() {
            beforeEach(function() {
                this.app = new App({});
                this.appView = new AppView({model: this.app.data});
            });

            it('should call render playlists view when render is called', function(){
                this.renderPlaylistsViewStub = sinon.stub(this.appView, 'renderPlaylistsView');
                this.appView.render();
                should.equal(this.renderPlaylistsViewStub.calledOnce, true);
                this.renderPlaylistsViewStub.restore();
            })
        });

        describe('Playlist View', function() {
            beforeEach(function() {
                this.playlistModel = new PlaylistModel({id: 1, name: 'playlist 1'});
                this.playlistView = new PlaylistView({model: this.playlistModel});
            });

            it('should render as a list item', function(){
                this.playlistView.el.nodeName.should.equal('LI');
            })

            it('should include name of the playlist', function(){
                this.playlistView.$el.find('a').text().should.equal(this.playlistModel.get('name'));
            })

            it('should include a link to view the playlist', function(){
                this.playlistView.$el.find('a').attr('href').should.equal('#playlists/1/view');
            })
        });

        describe('Playlists View', function() {
            beforeEach(function() {
                this.playlistsCollection = new PlaylistsCollection();
                this.playlistsView = new PlaylistsView({collection: this.playlistsCollection});

                this.playlistsCollection.add([
                    {id: 1, name: 'playlist 1'},
                    {id: 2, name: 'playlist 2'}
                ]);
            });

            it('should render as an unordered list', function(){
                this.playlistsView.el.nodeName.should.equal('UL');
            })

            it('should include list items for all the models in the collection', function(){
                this.playlistsView.$el.find('li').should.have.length(this.playlistsCollection.length);
            })
        });

        describe('Create Playlist View', function() {
            beforeEach(function() {
                this.playlistModel = new PlaylistModel();
                this.createPlaylistView = new CreatePlaylistView({model: this.playlistModel});
            });

            it('should be a form', function(){
                this.createPlaylistView.render().el.nodeName.should.equal('FORM');
            })

            describe('Model Interaction', function(){
                beforeEach(function() {
                    this.modelSaveStub = sinon.stub(this.playlistModel, 'save');
                });

                after(function() {
                    this.modelSaveStub.restore();
                });

                it('should save the model when the form is submitted', function(){
                    this.createPlaylistView.savePlaylist();
                    should.equal(this.modelSaveStub.calledOnce, true);
                })
            })
        });
    }
)