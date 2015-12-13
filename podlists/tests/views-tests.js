/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'podlists/app/podlistsApp',
        'podlists/helpers/api.config',
        'podlists/libraries/EventEmitter',
        'podlists/views/BaseView',
        'podlists/models/AppDataModel',
        'podlists/views/AppView',
        'podlists/collections/PlaylistsCollection',
        'podlists/models/PlaylistModel',
        'podlists/views/PlaylistsView',
        'podlists/views/PlaylistView',
        'podlists/views/CreatePlaylistView',
        'podlists/models/PodcastModel',
        'podlists/views/PodcastView',
        'podlists/views/PodcastSearchResultView',
        'podlists/views/SearchPodcastsView',
        'podlists/collections/PodcastsSearchResultsCollection',
        'podlists/views/AddPodcastToPlaylistsView',
        'podlists/views/AddPodcastToPlaylistView',
        'podlists/collections/PlaylistPodcastsCollection',
        'podlists/views/PlaylistPodcastsView',
        'podlists/models/PlaylistPodcastModel',
        'podlists/views/PlaylistPodcastView'
    ],
    function(
        podlistsApp,
        apiConfig,
        EventEmitter,
        BaseView,
        AppDataModel,
        AppView,
        PlaylistsCollection,
        PlaylistModel,
        PlaylistsView,
        PlaylistView,
        CreatePlaylistView,
        PodcastModel,
        PodcastView,
        PodcastSearchResultView,
        SearchPodcastsView,
        PodcastsSearchResultsCollection,
        AddPodcastToPlaylistsView,
        AddPodcastToPlaylistView,
        PodcastsCollection,
        PlaylistPodcastsView,
        PlaylistPodcastModel,
        PlaylistPodcastView
    ){
        var should = require('chai').should();
        var sinon = require('sinon');

        describe('Base View', function() {
            beforeEach(function() {
                this.baseView = new BaseView();
            });

            it('should exist', function(){
                this.baseView.should.be.ok;
            })

            it('should block scrolling in body', function(){
                this.baseView.stopBodyFromScrolling();
                should.equal($('body').hasClass('no-scroll'), true);
            })

            it('should let body scroll', function(){
                this.baseView.letBodyScroll();
                should.equal($('body').hasClass('no-scroll'), false);
            })
        });

        describe('Playlist View', function() {
            beforeEach(function() {
                this.playlistModel = new PlaylistModel({id: 1, name: 'playlist 1'});
                this.playlistView = new PlaylistView({model: this.playlistModel});
            });

            it('should exist', function(){
                this.playlistView.should.be.ok;
            })

            it('should render as a list item', function(){
                this.playlistView.el.nodeName.should.equal('LI');
            })

            it('should re-render when model changes', function(){
                this.playlistModel.set('name', 'new name');
                should.equal(this.playlistView.$el.find('.row>div:first-child').text(), this.playlistModel.get('name'));
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

            it('should exist', function(){
                this.playlistsView.should.be.ok;
            })

            it('should render as an unordered list', function(){
                should.equal(this.playlistsView.el.nodeName, 'UL')
            })

            it('should include list items for all the models in the collection', function(){
                should.equal(this.playlistsView.$el.find('li').length, this.playlistsCollection.length);
            })

            it('should render new models added to the collection', function(){
                this.playlistsCollection.add([
                    {id: 3, name: 'playlist 3'},
                    {id: 4, name: 'playlist 4'}
                ]);
                should.equal(this.playlistsView.$el.find('li').length, this.playlistsCollection.length);
            })
        });

        describe('Create Playlist View', function() {
            beforeEach(function() {
                this.playlistModel = new PlaylistModel();
                this.playlistsCollection = new PlaylistsCollection();
                this.createPlaylistView = new CreatePlaylistView({
                    model: this.playlistModel,
                    collection: this.playlistsCollection
                });

                this.collectionCreate_stub = sinon.stub(this.createPlaylistView.collection, 'create');

                $('#fixtures').html(this.createPlaylistView.el);
            });

            after(function(){
                $('#fixtures').html('');
                this.collectionCreate_stub.restore();
            });

            it('should exist', function(){
                this.createPlaylistView.should.be.ok;
            })

            it('on initialization render should be called', function(){
                should.equal(this.createPlaylistView.$el.find('form').length, 1);
            })

            it('should be initialised with a model', function(){
                should.equal(typeof this.createPlaylistView.model, 'object');
            })

            it('should be initialised with a collection', function(){
                should.equal(typeof this.createPlaylistView.collection, 'object');
            })

            it('should show information block', function(){
                this.createPlaylistView.showInformationBlock();
                should.equal(this.createPlaylistView.$el.find('.cpvc-information-block').hasClass('open'), true);
            })

            it('should hide information block', function(){
                this.createPlaylistView.hideInformationBlock();
                should.equal(this.createPlaylistView.$el.find('.cpvc-information-block').hasClass('open'), false);
            })

            it('should reset name field', function(){
                this.createPlaylistView.$el.find('input[name="playlist-name"]').val('test');
                this.createPlaylistView.resetPlaylistNameField();
                should.equal(this.createPlaylistView.$el.find('input[name="playlist-name"]').val(), '');
            })

            it('should show a validation error if an undefined name is provided', function(){
                this.showErrorMessage_stub = sinon.stub(this.createPlaylistView, 'showErrorMessage');
                this.createPlaylistView.savePlaylist(undefined);
                should.equal(this.showErrorMessage_stub.calledOnce, true);
                this.showErrorMessage_stub.restore();
            })
        });

        describe('Podcast View', function() {
            beforeEach(function() {
                this.podcastModel = new PodcastModel({
                    "id":1755,
                    "title":"Bedouin Love (Revisited)",
                    "tags":'1, 2, 3',
                    "network":"Radiotopia",
                    "thumbImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg",
                    "fullImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg",
                    "audioFiles":[{
                        "duration":"00:09:27",
                        "fileUrl":"https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3",
                        "id":1754,
                        "urlTitle":"bedouin-love-revisited"
                    }]
                });
                this.podcastView = new PodcastView({model: this.podcastModel});
            });

            it('should exist', function(){
                this.podcastView.should.be.ok;
            })

            it('should render the title', function(){
                should.equal(this.podcastView.$el.find('h4').text(), 'Bedouin Love (Revisited)');
            })

            it('should render the tags', function(){
                should.equal(this.podcastView.$el.find('h6').text(), '1, 2, 3');
            })

            it('should render the image', function(){
                should.equal(this.podcastView.$el.find('img').attr('src'), 'https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg');
            })

            it('should render the audio files', function(){
                _.each(this.podcastModel.get('audioFiles'), function(audioFile){
                    should.equal(this.podcastView.$el.find('a').attr('href'), audioFile.fileUrl);
                }, this);
            })
        });

        describe('Podcast Search Result View', function() {
            beforeEach(function() {
                this.podcastModel = new PodcastModel({
                    "id":1755,
                    "title":"Bedouin Love (Revisited)",
                    "tags":null,
                    "network":"Radiotopia",
                    "thumbImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg",
                    "fullImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg",
                    "audioFiles":[{
                        "duration":"00:09:27",
                        "fileUrl":"https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3",
                        "id":1754,
                        "urlTitle":"bedouin-love-revisited"
                    }]
                });
                this.podcastSearchResultView = new PodcastSearchResultView({model: this.podcastModel});
            });

            it('should exist', function(){
                this.podcastSearchResultView.should.be.ok;
            })

            it('should attach a template to show "add to playlist" button', function(){
                var _template = this.podcastSearchResultView.template(this.podcastModel.toJSON());
                should.equal($(_template).find('.psrvc-add-to-playlist-btn').length, 1);
            })

            it('should add to playlist', function(){
                this.addToPlaylist_stub = sinon.stub(this.podcastSearchResultView, 'addToPlaylist');
                this.podcastSearchResultView.$el.find('.psrvc-add-to-playlist-btn').trigger('click');
                should.equal(this.addToPlaylist_stub.calledOnce, true);
                this.addToPlaylist_stub.restore();
            })
        });

        describe('Add Podcast To Playlists View', function() {
            beforeEach(function() {
                this.podcastModel = new PodcastModel({
                    "id":1755,
                    "title":"Bedouin Love (Revisited)",
                    "tags":null,
                    "network":"Radiotopia",
                    "thumbImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg",
                    "fullImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg",
                    "audioFiles":[{
                        "duration":"00:09:27",
                        "fileUrl":"https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3",
                        "id":1754,
                        "urlTitle":"bedouin-love-revisited"
                    }]
                });
                this.playlistsCollection = new PlaylistsCollection([{id: 1, name: 'playlist 1', createdAt: 1, podcasts: []}]);
                this.addPodcastToPlaylistsView = new AddPodcastToPlaylistsView({
                    model: this.podcastModel,
                    playlistsCollection: this.playlistsCollection
                });
            });

            it('should exist', function(){
                this.addPodcastToPlaylistsView.should.be.ok;
            })

            it('should render podcast view when rendered', function(){
                should.equal(this.addPodcastToPlaylistsView.$el.find('.podcast-view-container').length, 1);
            })

            it('should render playlist views when rendered', function(){
                should.equal(this.addPodcastToPlaylistsView.$el.find('.add-podcast-to-playlist-view-container').length, 1);
            })
        });

        describe('Add Podcast To Playlist View', function() {
            beforeEach(function() {
                this.podcastModel = new PodcastModel({
                    "id":1755,
                    "title":"Bedouin Love (Revisited)",
                    "tags":null,
                    "network":"Radiotopia",
                    "thumbImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg",
                    "fullImage":"https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg",
                    "audioFiles":[{
                        "duration":"00:09:27",
                        "fileUrl":"https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3",
                        "id":1754,
                        "urlTitle":"bedouin-love-revisited"
                    }]
                });
                this.playlistModel = new PlaylistModel({id: 1, name: 'playlist 1', createdAt: 1, podcasts: []});
                this.addPodcastToPlaylistView = new AddPodcastToPlaylistView({
                    model: this.playlistModel,
                    podcastModel: this.podcastModel
                });
            });

            it('should exist', function(){
                this.addPodcastToPlaylistView.should.be.ok;
            })

            it('should render with an enabled "add" button', function(){
                should.equal(this.addPodcastToPlaylistView.$el.find('button').attr('disabled'), undefined);
            })

            it('should add to playlist and save', function(){
                this.save_stub = sinon.stub(this.playlistModel, 'save');
                this.addPodcastToPlaylistView.addToPlaylist();
                should.equal(this.playlistModel.hasPodcast(1755), true);
                should.equal(this.save_stub.calledOnce, true);
                this.save_stub.restore();
            })

            it('should render with a disabled "add" button', function(){
                this.playlistModel.addPodcast(1755);
                this.addPodcastToPlaylistView.render();
                should.equal(this.addPodcastToPlaylistView.$el.find('button').attr('disabled'), 'disabled');
            })

            it('should re-render when model sync', function(){
                this.playlistModel.addPodcast(1755);
                this.playlistModel.trigger('sync');
                should.equal(this.addPodcastToPlaylistView.$el.find('button').attr('disabled'), 'disabled');
            })
        });

        describe('Playlist Podcasts View', function() {
            beforeEach(function() {
                this.podcastsCollection = new PodcastsCollection([{id: 1}, {id: 2}]);
                this.playlistModel = new PlaylistModel({id: 1, name: 'playlist 1'});
                this.playlistPodcastsView = new PlaylistPodcastsView({
                    playlistModel: this.playlistModel,
                    collection: this.podcastsCollection
                });
            });

            it('should exist', function(){
                this.playlistPodcastsView.should.be.ok;
            })

            it('should render all the podcasts in the collection', function(){
                should.equal(this.playlistPodcastsView.$el.find('.playlist-podcast-view-container').length, this.podcastsCollection.length);
            })
        });

        describe('Playlist Podcast View', function() {
            beforeEach(function() {
                this.playlistPodcastModel = new PlaylistPodcastModel(null);
                this.playlistPodcastModelFetch_stub = sinon.stub(this.playlistPodcastModel, 'fetch');

                this.playlistPodcastView = new PlaylistPodcastView({
                    model: this.playlistPodcastModel
                });
            });

            after(function(){
                this.playlistPodcastModelFetch_stub.restore();
            })

            it('should exist', function(){
                this.playlistPodcastView.should.be.ok;
            })
        });

        describe('Search Podcasts View', function() {
            beforeEach(function() {
                this.podcastsSearchResultsCollection = new PodcastsSearchResultsCollection();
                this.searchPodcastsView = new SearchPodcastsView({
                    collection: this.podcastsSearchResultsCollection
                });

                this.podcastsSearchResultsCollectionFetch_stub = sinon.stub(this.podcastsSearchResultsCollection, 'fetch');
            });

            it('should exist', function(){
                this.searchPodcastsView.should.be.ok;
            })

            it('should render feedback when collection starts fetching', function(){
                this.renderFeedback_stub = sinon.stub(this.searchPodcastsView, 'renderFeedback');
                this.searchPodcastsView.collection.trigger('request');
                should.equal(this.renderFeedback_stub.calledOnce, true);
                this.renderFeedback_stub.restore();
            })

            it('should render a search a search result', function(){
                var podcastModel = new PodcastModel({
                    "id": 1755,
                    "title": "Bedouin Love (Revisited)",
                    "description": "Bedouin Love (Revisited) by Love + Radio",
                    "date_created": "2015-02-01",
                    "date_added": "2015-02-07T05:40:59.695Z",
                    "identifier": "https://api.soundcloud.com/tracks/34029390",
                    "show_id": 36,
                    "show_title": "Love + Radio",
                    "digital_location": "http://soundcloud.com/loveandradio/season-3-is-coming",
                    "physical_location": "soundcloud",
                    "duration": 567,
                    "updated_at": "2015-07-22T23:26:17.708Z",
                    "network": "Radiotopia",
                    "categories": [
                        {
                            "id": 71,
                            "parent_id": 6,
                            "name": "Storytelling",
                            "name_lc": "storytelling"
                        }
                    ],
                    "audio_files": [
                        {
                            "id": 1754,
                            "mp3": "https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3",
                            "ogg": "https://www.audiosear.ch/media/c62ab06ce1e76b624397886b29ef9c34/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.ogg",
                            "duration": "00:09:27",
                            "url_title": "bedouin-love-revisited",
                            "listenlen": "medium"
                        }
                    ],
                    "entities": [
                        {
                            "entity": "Jordan",
                            "category": "location",
                            "score": 0.6309,
                            "type": "Country"
                        },
                        {
                            "entity": "lawyer",
                            "category": "entity",
                            "score": 0.3333,
                            "type": "Position"
                        },
                        {
                            "entity": "This American Life",
                            "category": "entity",
                            "score": 0.3333,
                            "type": "Tv Show"
                        },
                        {
                            "entity": "Jetman",
                            "category": "entity",
                            "score": 0.3333,
                            "type": "Person"
                        },
                        {
                            "entity": "Human Interest",
                            "category": "topic",
                            "score": 0.202,
                            "type": null
                        },
                        {
                            "entity": "working: people talk about what they do all day and how they feel about what they do",
                            "category": "tag",
                            "score": 0.1667,
                            "type": null
                        },
                        {
                            "entity": "culture",
                            "category": "tag",
                            "score": 0.1667,
                            "type": null
                        },
                        {
                            "entity": "social history",
                            "category": "tag",
                            "score": 0.1667,
                            "type": null
                        }
                    ],
                    "locations": [
                        {
                            "id": 93372,
                            "is_confirmed": false,
                            "identifier": "http://d.opencalais.com/genericHasher-1/e3790e59-5b7a-3ef4-8402-d9b411026191",
                            "name": "Jordan",
                            "score": 0.6309,
                            "category": "location",
                            "entity_type": "Country",
                            "item_id": 1755,
                            "extra": "---\nlatitude: '31.9276533333'\nlongitude: '35.8793493333'\n",
                            "created_at": "2015-02-11T06:32:54.613Z",
                            "updated_at": "2015-02-26T03:25:54.220Z"
                        }
                    ],
                    "topics": [
                        {
                            "id": 93396,
                            "is_confirmed": false,
                            "identifier": null,
                            "name": "Human Interest",
                            "score": 0.202,
                            "category": "topic",
                            "entity_type": null,
                            "item_id": 1755,
                            "extra": "---\noriginal: Human Interest\n",
                            "created_at": "2015-02-11T06:33:01.411Z",
                            "updated_at": "2015-02-26T03:25:54.472Z"
                        }
                    ],
                    "image_urls": {
                        "full": "https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg",
                        "thumb": "https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg"
                    },
                    "urls": {
                        "self": "https://www.audiosear.ch/api/episodes/1755",
                        "ui": "https://www.audiosear.ch/a/6db/bedouin-love-revisited"
                    },
                    "highlights": []
                }, {parse: true});
                this.searchPodcastsView.renderSearchResult(podcastModel);
                should.equal(this.searchPodcastsView.$el.find('.spvc-results-list .podcast-search-result-view-container').length, 1);
            })

            it('should render feedback', function(){
                this.searchPodcastsView.renderFeedback('feedback');
                should.equal(this.searchPodcastsView.$el.find('.spvc-feedback-message').text(), 'feedback');
            })

            it('should search', function(){
                this.searchPodcastsView.search('test');
                should.equal(this.podcastsSearchResultsCollectionFetch_stub.calledOnce, true);
            })

            it('should get search query', function(){
                this.searchPodcastsView.$el.find('input[name="q"]').val('test');
                should.equal(this.searchPodcastsView.getSearchQuery(), 'test');
            })

            it('should check if there is a search query', function(){
                this.searchPodcastsView.$el.find('input[name="q"]').val('');
                should.equal(this.searchPodcastsView.isThereASearchQuery(), false);
            })

        });

        describe('App View', function() {
            beforeEach(function() {
                this.app = podlistsApp;
                this.app.data = new AppDataModel();
                this.app.eventBus = new EventEmitter();
                this.app.data.set('playlistsCollection', new PlaylistsCollection([{id: 1, name: 'playlist 1', createdAt: 1, podcasts: []}]));
                this.appView = new AppView({
                    model: this.app.data
                });
            });

            it('should render playlists view', function(){
                should.equal(this.appView.$el.find('.playlists-view-container').length, 1);
            })

            it('should render create playlist view', function(){
                should.equal(this.appView.$el.find('.create-playlist-view-container').length, 1);
            })

            it('should render search podcasts view', function(){
                should.equal(this.appView.$el.find('.search-podcasts-view-container').length, 1);
            })

            it('should render playlist podcasts view', function(){
                this.appView.renderPlaylistPodcastsView(1);
                should.equal(this.appView.$el.find('.playlists-podcasts-view-container').length, 1);
            })

            it('should not render playlist podcasts view for invalid id', function(){
                this.appView.renderPlaylistPodcastsView(2);
                should.equal(this.appView.$el.find('.playlists-podcasts-view-container').length, 0);
            })

            it('should close playlist podcasts view', function(){
                this.appView.renderPlaylistPodcastsView(1);
                this.appView.closePlaylistPodcastsView();
                should.equal(this.appView.$el.find('.playlists-podcasts-view-container').length, 0);
            })

            it('should not render add podcast to playlist view', function(){
                this.appView.renderAddPodcastToPlaylistView(new PodcastModel(), this.appView.model.get('playlistsCollection'));
                should.equal(this.appView.$el.find('.add-podcast-to-playlists-view-container').length, 1);
            })

            it('should render add podcast to playlist view when "ADD-PODCAST-TO-PLAYLIST" event is emitted', function(){
                this.app.eventBus.trigger('ADD-PODCAST-TO-PLAYLIST', new PodcastModel());
                should.equal(this.appView.$el.find('.add-podcast-to-playlists-view-container').length, 1);
            })
        });
    }
)