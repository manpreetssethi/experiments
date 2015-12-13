/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'podlists/helpers/api.config',
        'podlists/collections/BaseCollection',
        'podlists/collections/PlaylistsCollection',
        'podlists/collections/PlaylistPodcastsCollection',
        'podlists/collections/PodcastsSearchResultsCollection'
    ],
    function(
        apiConfig,
        BaseCollection,
        PlaylistsCollection,
        PlaylistPodcastsCollection,
        PodcastsSearchResultsCollection
    ){
        var should = require('chai').should();
        var expect = require('chai').expect;

        describe('Base Collection', function() {
            beforeEach(function() {
                this.baseCollection = new BaseCollection();
            });

            it('should exist', function(){
                this.baseCollection.should.be.ok;
            })
        });

        describe('Playlists Collection', function() {
            beforeEach(function() {
                this.playlistsCollection = new PlaylistsCollection();
            });

            it('should exist', function(){
                this.playlistsCollection.should.be.ok;
            })

            it('url should be used from the config', function(){
                should.equal(this.playlistsCollection.url, apiConfig.playlists.all);
            })

            it('should parse data from server', function(){
                var _data = {
                    "fail":false,
                    "data":{
                        "-K5RcANWdh0iKf6XSNkn":{"createdAt":1450031756901,"name":"Music","podcasts":[8203,15672,4113]}
                    }
                };
                var _json = this.playlistsCollection.parse(_data);
                should.equal(typeof _json, 'object');
                should.equal(_json.length, 1);
                should.equal(_json[0].id, '-K5RcANWdh0iKf6XSNkn');
                should.equal(_json[0].name, 'Music');
                should.equal(typeof _json[0].podcasts, 'object');
                should.equal(_json[0].podcasts.length, 3);
                should.equal(_json[0].createdAt, 1450031756901);
            })
        });

        describe('Playlist Podcasts Collection', function() {
            beforeEach(function() {
                this.playlistPodcastsCollection = new PlaylistPodcastsCollection();
            });

            it('should exist', function(){
                this.playlistPodcastsCollection.should.be.ok;
            })

            it('url should be used from the config', function(){
                should.equal(this.playlistPodcastsCollection.url, apiConfig.podcasts.all);
            })
        });

        describe('Podcasts Search Results Collection', function() {
            beforeEach(function() {
                this.podcastsSearchResultsCollection = new PodcastsSearchResultsCollection();
            });

            it('should exist', function(){
                this.podcastsSearchResultsCollection.should.be.ok;
            })

            it('url should be used from the config', function(){
                should.equal(this.podcastsSearchResultsCollection.url, apiConfig.podcasts.search);
            })

            it('should parse data from server')
        });
    }
)