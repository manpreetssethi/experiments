/**
 * Created by manpreet on 11/12/15.
 */
define(
    [
        'podlists/models/BaseModel',
        'podlists/models/AppDataModel',
        'podlists/models/PlaylistModel'
    ],
    function(
        BaseModel,
        AppDataModel,
        PlaylistModel
    ){
        var should = require('chai').should();

        describe('Base Model', function() {
            describe('Initialisation', function () {
                beforeEach(function() {
                    this.baseModel = new BaseModel();
                });
            });
        });

        describe('App Data Model', function() {
            describe('Initialisation', function () {
                beforeEach(function() {
                    this.appDataModel = new AppDataModel();
                });

                it('default value of attribute "playlistsCollection" is null', function(){
                    should.equal(this.appDataModel.get('playlistsCollection'), null);
                })

                it('default value of attribute "audioPlayerModel" is null', function(){
                    should.equal(this.appDataModel.get('audioPlayerModel'), null);
                })

                it('default value of attribute "userModel" is null', function(){
                    should.equal(this.appDataModel.get('userModel'), null);
                })

                it('default value of attribute "podcastsCollection" is null', function(){
                    should.equal(this.appDataModel.get('podcastsCollection'), null);
                })
            });
        });

        describe('Playlist Model', function() {
            describe('Initialisation', function () {
                beforeEach(function() {
                    this.playlistModel = new PlaylistModel();
                });

                it('default value of attribute "id" is null', function(){
                    should.equal(this.playlistModel.get('id'), null);
                })

                it('default value of attribute "name" is null', function(){
                    should.equal(this.playlistModel.get('name'), null);
                })
            });
        });
    }
)