/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'podlists/models/BaseModel',
        'podlists/models/AppDataModel',
        'podlists/models/PlaylistModel',
        'podlists/models/PodcastModel',
        'podlists/models/PlaylistPodcastModel'
    ],
    function(
        BaseModel,
        AppDataModel,
        PlaylistModel,
        PodcastModel,
        PlaylistPodcastModel
    ){
        var should = require('chai').should();
        var expect = require('chai').expect;

        describe('Base Model', function() {
            beforeEach(function() {
                this.baseModel = new BaseModel();
            });

            it('should exist', function(){
                this.baseModel.should.be.ok;
            })
        });

        describe('App Data Model', function() {
            beforeEach(function() {
                this.appDataModel = new AppDataModel();
            });

            it('should exist', function(){
                this.appDataModel.should.be.ok;
            })

            it('default value of attribute "playlistsCollection" is null', function(){
                should.equal(this.appDataModel.get('playlistsCollection'), null);
            })

            it('default value of attribute "podcastsCollection" is null', function(){
                should.equal(this.appDataModel.get('podcastsCollection'), null);
            })
        });

        describe('Playlist Model', function() {
            beforeEach(function() {
                this.playlistModel = new PlaylistModel();
            });

            it('should exist', function(){
                this.playlistModel.should.be.ok;
            })

            it('default value of attribute "id" is null', function(){
                should.equal(this.playlistModel.get('id'), null);
            })

            it('default value of attribute "name" is null', function(){
                should.equal(this.playlistModel.get('name'), null);
            })

            it('default value of attribute "podcasts" is an object', function(){
                should.equal(typeof this.playlistModel.get('podcasts'), 'object');
            })

            it('default value of attribute "podcasts" is an empty array', function(){
                should.equal(this.playlistModel.get('podcasts').length, 0);
            })

            it('should be able to add a podcast', function(){
                this.playlistModel.addPodcast(1);
                should.equal(this.playlistModel.get('podcasts').length, 1);
            })

            it('should be able to check if there is a podcast', function(){
                this.playlistModel.addPodcast(2);
                should.equal(this.playlistModel.hasPodcast(2), true);
            })

            it('should invalidate an empty "name" attribute', function(){
                should.equal(this.playlistModel.validate({name: ''}), 'Provide a name!');
            })

            it('should validate a non empty "name" attribute', function(){
                should.equal(this.playlistModel.validate({name: 'Playlist 1'}), undefined);
            })
        });

        describe('Podcast Model', function() {
            beforeEach(function() {
                this.podcastModel = new PodcastModel({
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
            });

            it('should exist', function(){
                this.podcastModel.should.be.ok;
            })

            it('should parse data from server', function () {
                var _json = this.podcastModel.toJSON();
                expect(_json.id).to.equal(1755);
                expect(_json.title).to.equal('Bedouin Love (Revisited)');
                expect(_json.network).to.equal('Radiotopia');
            });

            it('should parse tags data from server', function () {
                var _json = this.podcastModel.toJSON();
                expect(_json.tags).to.equal(null);
            });

            it('should parse image data from server', function () {
                var _json = this.podcastModel.toJSON();
                expect(_json.thumbImage).to.equal("https://i1.sndcdn.com/avatars-000041262272-ykduz7-large.jpg");
                expect(_json.fullImage).to.equal("https://i1.sndcdn.com/avatars-000041262272-ykduz7-t500x500.jpg");
            });

            it('should parse audio files data from server', function () {
                var _json = this.podcastModel.toJSON();
                var _audioFile = _.first(_json.audioFiles);
                expect(_audioFile.id).to.equal(1754);
                expect(_audioFile.duration).to.equal("00:09:27");
                expect(_audioFile.urlTitle).to.equal("bedouin-love-revisited");
                expect(_audioFile.fileUrl).to.equal("https://www.audiosear.ch/media/760940896607dfcdd9fa930f25316e6f/0/public/audio_file/1754/34029390-loveandradio-season-3-is-coming.mp3");
            });
        });

        describe('Playlist Podcast Model', function() {
            beforeEach(function() {
                this.playlistPodcastModel = new PlaylistPodcastModel({
                    "fail": false,
                    "data": {"id":4533,"title":"StarTalk SoundBite: How Is Technology Affecting Human Evolution","description":"Is our reliance on technology hindering our evolution? \nBill Nye uses himself as an example of technology's direct effect on our evolutionary process, and with some help from Chuck Nice the duo weigh the pros and cons of these effects. If you enjoyed this SoundBite and want to hear more from Bill Nye, be sure to check out the full episode here: https://soundcloud.com/startalk/cosmic-queries-bill-nye-edition","date_created":"2015-04-07","identifier":"https://api.soundcloud.com/tracks/199744322","digital_location":"http://soundcloud.com/startalk/startalk-soundbite-how-is-technology-affecting-human-evolution","physical_location":"soundcloud","duration":159,"tags":["StarTalk Radio","Cosmic Queries","Science","Bill Nye The Science Guy","Chuck Nice","Evolution","Technology","The Matrix","Medicine","Survival of the Fittest","StarTalk"],"updated_at":"2015-07-22 15:14:32 UTC","itunes_episode":null,"date_added":"2015-04-09 15:25:19 UTC","show_id":32,"show_title":"Star Talk","audio_files":[{"id":4532,"duration":158,"url":["https://www.audiosear.ch/media/audio_file/11b4/stream.mp3","https://www.audiosear.ch/media/audio_file/11b4/stream.ogg"]}],"image_files":[{"url":{"full":"https://i1.sndcdn.com/avatars-000100403534-873grd-t500x500.jpg","thumb":"https://i1.sndcdn.com/avatars-000100403534-873grd-large.jpg"}}],"entities":[],"extra":{"itunes_episode":null},"urls":{"self":"https://www.audiosear.ch/api/episodes/4533","ui":"https://www.audiosear.ch/a/11b5/startalk-soundbite-how-is-technology-affecting-human-evolution"},"categories":[{"id":10,"parent_id":null,"name":"Science","name_lc":"science"},{"id":5,"parent_id":null,"name":"Society & Culture","name_lc":"society & culture"}],"highlights":{}}
                }, {parse: true});
            });

            it('should exist', function(){
                this.playlistPodcastModel.should.be.ok;
            })

            it('should parse data from server', function () {
                var _json = this.playlistPodcastModel.toJSON();
                expect(_json.id).to.equal(4533);
                expect(_json.title).to.equal('StarTalk SoundBite: How Is Technology Affecting Human Evolution');
                expect(_json.network).to.equal(null);
            });

            it('should parse tags data from server', function () {
                var _json = this.playlistPodcastModel.toJSON();
                expect(_json.tags).to.equal('StarTalk Radio, Cosmic Queries, Science, Bill Nye The Science Guy, Chuck Nice, Evolution, Technology, The Matrix, Medicine, Survival of the Fittest, StarTalk');
            });

            it('should parse image data from server', function () {
                var _json = this.playlistPodcastModel.toJSON();
                expect(_json.thumbImage).to.equal('https://i1.sndcdn.com/avatars-000100403534-873grd-large.jpg');
                expect(_json.fullImage).to.equal('https://i1.sndcdn.com/avatars-000100403534-873grd-t500x500.jpg');
            });

            it('should parse audio files data from server', function () {
                var _json = this.playlistPodcastModel.toJSON();
                var _audioFile = _.first(_json.audioFiles);
                expect(_audioFile.id).to.equal(4532);
                expect(_audioFile.duration).to.equal(158);
                expect(_audioFile.urlTitle).to.equal("untitled file");
                expect(_audioFile.fileUrl).to.equal("https://www.audiosear.ch/media/audio_file/11b4/stream.mp3");
            });
        });
    }
)